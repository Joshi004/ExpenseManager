import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import  '../../emConstants'
import './create-account.css'
class CreateAccount extends Component{

    constructor(props){
        super(props)
    }
    state={
        name:'',
        details:'',
        initial_amount:0
    }

    handleInputChange = (event)=>{
        console.log('Value changed',event.target.value)
        const val = event.target.value
        const key = event.target.name
        this.setState({[key]:val})
    }

    createAccount  = ()=>{
        console.log("Create Account Called")
        fetch(url.create_account,{
            method:'post',
            body:JSON.stringify({account_id:this.state.name+'_01',name:this.state.name, details:this.state.details, initial_amount:this.state.initial_amount, created_at:"",updated_at:""}),
            headers:{'Content-type' :'application/json'}
        })
        .then((response) => {
          
                this.props.getAccounts()
            
          return response.json();
        })
        .then((myJson) => {
        }).catch((e)=>{
            console.log("Error encountered while fetching",e)
        });
    }

    render(){
        return(
            <div className='container'>
            <div className='formHeader'> Provide Account details</div>
            <form className='form form-vertical'>
                <div className='form-group'>
                    <label>Account Name</label>
                    <input className="form-control" type='text' name='name' onChange={this.handleInputChange} value={this.state.name}></input>
                </div>
                <div className='form-group'>
                    <label>Account Details</label>
                    <input className="form-control" type='text' name='details' onChange={this.handleInputChange} value={this.state.details}></input>
                </div>
                <div className='form-group'>
                    <label>Initial Amount</label>
                    <input className="form-control" type='number' name='initial_amount' onChange={this.handleInputChange} value={this.state.initial_amount}></input>
                </div>
            </form>
            <button onClick={this.createAccount} className='btn btn-primary'>Create Account</button>
            </div>
        )
    }
}

export default CreateAccount