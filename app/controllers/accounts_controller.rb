class AccountsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
	end

	def account_params
		return {name:params[:name],initial_amount:params[:initial_amount],details:params[:details]}
	end
	

	def getAccounts()
		all_accounts = Account.find_by_sql('select coalesce(sum(amount),0) as total_spent, a.* from expenses e right join accounts a on e.account_id=a.id group by a.id;')
		render json: all_accounts
	end

	def createAccount()
		p params
		p params.keys
		p 'Create Account Invoked for account :- ',params['name']
		err_flag=0
			a = account_params
			p a
		@account = Account.new(a)
			@account.save!
			render json: @account
	end


end
