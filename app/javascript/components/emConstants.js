api = '/api'
ver = '/v1'
urls={
    create_account:api+ver+'/create_account',
    get_accounts:api+ver+'/get_accounts',
    get_expenses:api+ver+'/get_expenses',
    create_expense:api+ver+'/create_expense',
    delete_expense:api+ver+'/delete_expense/'
}

accountTableMap = [
    { field : 'name', label:'Name',toDisplay:true},
    { field : 'details', label:'Details',toDisplay:true},
    { field : 'initial_amount', label:'Initial Amount',toDisplay:true},
    { field : 'created_at', label:'Created On',toDisplay:true},
    { field : 'updated_at', label:'Last Update',toDisplay:true},
    { field : 'total_spent', label:'Total Expendeture',toDisplay:true},
]

expenseTableMap = [
    { field : 'amount', label:'Amount',toDisplay:true},
    { field : 'category', label:'Expense Category',toDisplay:true},
    { field : 'payement_method', label:'Payed Via',toDisplay:true},
    { field : 'description', label:'Paid For',toDisplay:true},
    { field : 'account_name', label:'For Account',toDisplay:false},
]
