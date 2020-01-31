class ExpensesController < ApplicationController
	skip_before_action :verify_authenticity_token
	rescue_from StandardError, :with => :render_standard_error

	def render_standard_error(error)
		puts "REcording Error *****"
		ise = InternalServerError.new(error.message)
		ise.set_backtrace(error.backtrace)
		puts "REcording Error ***** #{error.message} ******************"
		puts error.message
		render json: {err:error.message}
	  end


    def getExpenses()
        if(params['account_id'] == 'all')
        render json: Expense.all
        else
        render json: Expense.find_by('account_id': params['account_id'])
        end
    end
    
    def expense_params
		params.require(:expense).permit(:amount, :category,:account_id, :description,:payement_method,:created_at,:updated_at)
	end


    def createExpense()
		@expense = Expense.new(expense_params)
		# begin
		result = @expense.save!

		# rescue

		# render json: {error: 'There was an error saving the account'}
		# end
		puts "result is  : #{result}"
		render json: result
	end
end
