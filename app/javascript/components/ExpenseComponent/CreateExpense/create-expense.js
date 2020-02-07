import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './create-expense.css'
import axios from 'axios'
import '../../emConstants'

class CreateExpenseComponent extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            amount: '0',
            category: 'other',
            description: '',
            payement_method: 'cash',
            account_id: localStorage.selectedAccountID,
            allAccounts:prop.allAccounts
        }
        console.log('In Create Expense Component props recived are',this.props)
        console.log('Constructor initiated forf create comp')
    }

   

    handleInputChange = (event) => {
        console.log('Value changed', event.target.value)
        const val = event.target.value
        const key = event.target.name
        this.setState({ [key]: val })
    }

    createExpense = () => {
        const data = {
            id:this.state.id,
            amount: this.state.amount,
            category: this.state.category,
            description: this.state.description,
            payement_method: this.state.payement_method,
            account_id: this.state.account_id
        }

        const config = {
            method: 'put',
            url: this.state.id? urls.edit_expense:urls.create_expense,
            data: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        }

        axios(config)
            .then((response) => {
                console.log('Create response is ', response)
            })
            .catch((err) => {
                console.log("Following error response from server : ", err)
            })
    }

    renderDropdown = ()=>{
   
        return this.state.allAccounts?.map((opt)=>{
        return <option key={opt.id} value={opt.id}>{opt.name}</option> 
        })
   
            
        
    }
componentDidMount(){
    if(!this.state.allAccounts){
        this.getAccounts()
    }
    if(this.props.location.state){
        this.setState(this.props.location.state)
    }
}
    getAccounts = ()=>{
        fetch(urls.get_accounts,{
            method:'get',
        })
        .then((response) => {
                return response.json();
        })
        .then((myJson) => {
            this.setState({'allAccounts': myJson})
        }).catch((e)=>{
            console.log("Error encountered while fetching",e)
        });
    }


    render() {
        console.log('Render initiated forf create comp',this.props)
        return (<div className='container'>
            <div className='formHeader'> Provide Expense details</div>
            <form className='form form-vertical'>
                <div className='form-group'>
                    <label>Amount</label>
                    <input className="form-control" type='number' name='amount' onChange={this.handleInputChange} value={this.state.amount}></input>
                </div>
                <div className='form-group'>
                    <label>Expense Category</label>
                    <select value ={this.state.category} onChange={this.handleInputChange} className="form-control" name="category">
                        <option  value="clothing">Clothing</option>
                        <option  value="household">Household</option>
                        <option value="medication">Medication</option>
                        <option value="transport">Transport</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input className="form-control" type='text' name='description' onChange={this.handleInputChange} value={this.state.description}></input>
                </div>
                <div className='form-group'>
                    <label>Payement Method</label>
                    <select onChange={this.handleInputChange} value={this.state.payement_method} className="form-control" name="payement_method">
                        <option  value="cash">Cash</option>
                        <option  value="card">Card</option>
                        <option value="paytm">Paytm</option>
                        <option value="upi">Unified Payement Index</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Add to account</label>
                    <select onChange={this.handleInputChange} value={this.state.account_id} className="form-control" name="account_id">
                        { this.renderDropdown() }
                    </select>
                </div>
            </form>
            <button onClick={this.createExpense} className='btn btn-primary'>Record Expense</button>
        </div>)
    }
}

export default withRouter (CreateExpenseComponent)