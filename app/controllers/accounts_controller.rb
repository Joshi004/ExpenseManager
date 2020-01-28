class AccountsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
	end

	def account_params
		params.require(:account).permit(:account_id, :name, :details,:initial_amount,:created_at,:updated_at)
	end


	def createAccount()
		p "*************************************************************************"
		# params.permit([:name])
		p params['name'] 
		@account = Account.new(account_params)
		Account.create(account_params())
		# puts @account
		
		redirect_to @account
	end


end
