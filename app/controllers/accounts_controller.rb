class AccountsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
	end

	def account_params
		params.require(:account).permit(:account_id, :name, :details,:initial_amount,:created_at,:updated_at)
	end

	def getAccounts()
		render json: Account.all
	end

	def createAccount()
		print 'Create Account Invoked for account :- ',params['name']
		@account = Account.new(account_params)
		begin
			Account.create(account_params())
		rescue

			render json: {error: 'There was an error saving the account'}
		end
		render json: @account
	end


end
