import React,{Component} from 'react'
import './create-expense.css'
import axios from 'axios'
import '../../emConstants'

class CreateExpenseComponent extends Component{
    constructor(prop){
        super(prop)
        console.log('Constructor initiated forf create comp')
    }

    state={
        amount:'',
        category:'',
        description:'',
        payement_method:'',
        account_id:localStorage.selectedAccountName
    }

    handleInputChange = (event)=>{
        console.log('Value changed',event.target.value)
        const val = event.target.value
        const key = event.target.name
        this.setState({[key]:val})
    }

    createExpense=()=>{
        const data = {
        amount:this.state.amount,
        category:this.state.category,
        description:this.state.description,
        payement_method:this.state.payement_method,
        account_id:this.state.account_id
        }

        const config={
            method:'post',
            url:urls.create_expense,
            data:JSON.stringify(data),
            headers:{'Content-type' :'application/json'}
        }

        axios(config)
        .then((response)=>{
            console.log('Create response is ',response)
        })
        .catch((err)=>{
            console.log("Following error response from server : ",err)
        }) 
    }

    render(){
        console.log('Render initiated forf create comp')
        return(<div className='container'>
        <div className='formHeader'> Provide Expense details</div>
        <form className='form form-vertical'>
            <div className='form-group'>
                <label>Amount</label>
                <input className="form-control" type='number' name='amount' onChange={this.handleInputChange} value={this.state.name}></input>
            </div>
            <div className='form-group'>
                <label>Expense Category</label>
                <input className="form-control" type='text' name='category' onChange={this.handleInputChange} value={this.state.details}></input>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input className="form-control" type='text' name='description' onChange={this.handleInputChange} value={this.state.initial_amount}></input>
            </div>
            <div className='form-group'>
                <label>Payement Method</label>
                <input className="form-control" type='text' name='payement_method' onChange={this.handleInputChange} value={this.state.initial_amount}></input>
            </div>
            <div className='form-group'>
                <label>Add to account</label>
                <input className="form-control" type='text' name='account_id' onChange={this.handleInputChange} value={this.state.initial_amount}></input>
            </div>
        </form>
        <button onClick={this.createExpense} className='btn btn-primary'>Create Expense</button>
        </div>)
    }
}

export default CreateExpenseComponent