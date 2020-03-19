require 'rails_helper'
# require "controllers/acounts_controller"
RSpec.describe "app/controllers/AccountsController", :type => :request do

  xit "returns ok and a 200 for a successful request." do
      get "/api/v1/get_accounts"
      expect(response.status).to eq(200)
    end


  xit "It should return status code 200 for adding new account" do
    obj = {
      "name"=> "Test_198765",
      "details"=> "Expense for Test_01",
      "initial_amount"=> 500
    }
    post "/api/v1/create_account",:params=>obj
    expect(response.status).to eq(200)
  end


  it "It Fails to add duplicate account" do
    obj = {
      "name"=> "Test_06",
      "account_id"=> "Test_0101",
      "details"=> "Expense for Test_01",
      "initial_amount"=> 500,
      "created_at"=> "",
      "updated_at"=> ""
    }
    post "/api/v1/create_account",:params=>obj
    post "/api/v1/create_account",:params=>obj
    
    expect(response.status).to eq(500)
  end
end