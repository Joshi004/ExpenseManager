class AccountsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
	end

	def account_params
		params.require(:account).permit(:account_id, :name, :details,:initial_amount,:created_at,:updated_at)
	end
	

	def getAccounts()
		all_accounts = Account.find_by_sql('select coalesce(sum(amount),0) as total_spent, a.* from expenses e right join accounts a on e.account_id=a.id group by a.id;')
		render json: all_accounts
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
