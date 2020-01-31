api = '/api'
ver = '/v1'
urls={
    create_account:api+ver+'/create_account',
    get_accounts:api+ver+'/get_accounts',
    get_expenses:api+ver+'/get_expenses',
    create_expense:api+ver+'/create_expense'
}

accountTableMap = [
    { field : 'name', label:'Name',toDisplay:true},
    { field : 'details', label:'Details',toDisplay:true},
    { field : 'initial_amount', label:'Initial Amount',toDisplay:true},
    { field : 'created_at', label:'Created On',toDisplay:true},
    { field : 'updated_at', label:'Last Update',toDisplay:true},
    { field : 'total_spent', label:'Total Expendeture',toDisplay:true},

]