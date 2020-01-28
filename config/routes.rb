Rails.application.routes.draw do
  get '/accounts' => 'accounts#index'
  post '/api/v1/create_account' => 'accounts#createAccount'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
