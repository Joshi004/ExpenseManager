Rails.application.routes.draw do
  get '/accounts' => 'accounts#index'
  post '/api/v1/create_account' => 'accounts#createAccount'
  get '/api/v1/get_accounts' => 'accounts#getAccounts'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
