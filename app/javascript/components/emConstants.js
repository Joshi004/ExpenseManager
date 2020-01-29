api = '/api'
ver = '/v1'
url={
    create_account:api+ver+'/create_account',
    get_accounts:api+ver+'/get_accounts'
}

accountTableMap = [
    { field : 'account_id', label:'Account ID',toDisplay:true},
    { field : 'name', label:'Name',toDisplay:true},
    { field : 'details', label:'Details',toDisplay:true},
    { field : 'initial_amount', label:'Initial Amount',toDisplay:true},
    { field : 'created_at', label:'Created On',toDisplay:true},
    { field : 'updated_at', label:'Last Update',toDisplay:true}
]