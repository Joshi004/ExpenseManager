require 'rails_helper'
RSpec.describe "app/controllers/ExpensesController", :type => :request do

  it "returns ok and a 200 for a successful request." do
      get "/api/v1/get_expenses/all"
      expect(response.status).to eq(200)
    end


    it "returns ok and a 200 for a successful request." do
      get "/api/v1/get_expenses/1"
      expect(response.status).to eq(200)
    end

    it "returns ok and a 200 for a successful request." do
      get "/api/v1/get_expenses/1"
      expect(response.status).to eq(200)
    end

  it "It Returns status 200 for adding expense" do
    obj = {
      'amount' => 243,
      'category' => "Clothing", 
      'description' => "Shirts ", 
      'payement_method' => "Cash", 
      'account_id' => 5
    }
    post "/api/v1/create_expense",:params=>obj
    expect(response.status).to eq(200)
  end

  it "It Returns status 422 for unknown account ID" do
    obj = {
      'amount' => 243,
      'category' => "Clothing", 
      'description' => "Shirts ", 
      'payement_method' => "Cash", 
      'account_id' => 55
    }
    post "/api/v1/create_expense",:params=>obj
    expect(response.status).to eq(422)
  end


  it "It Should edit the exoense with id 1 and return code 200" do
    obj = {
      'id' => 1,
      'amount' => 243,
      'category' => "Clothing", 
      'description' => "Shirts ", 
      'payement_method' => "Cash", 
      'account_id' => 5
    }
    put "/api/v1/edit_expense",:params=>obj
    expect(response.status).to eq(200)
  end

  it "It Should return 404 as id is not present" do
    obj = {
      'amount' => 243,
      'category' => "Clothing", 
      'description' => "Shirts ", 
      'payement_method' => "Cash", 
      'account_id' => 5
    }
    put "/api/v1/edit_expense",:params=>obj
    expect(response.status).to eq(404)
  end

  it "returns ok and a 200 for a successful delete." do
    delete '/api/v1/delete_expense/1'
    expect(response.status).to eq(200)
  end
 
  it "returns ok and a 404 for a invalid expense ID." do
    delete '/api/v1/delete_expense/1111'
    expect(response.status).to eq(404)
  end


end