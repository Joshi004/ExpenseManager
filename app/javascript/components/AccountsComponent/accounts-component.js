import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import  '../emConstants'
import './accounts-component.css';
import ListAccounts from './list-accounts/list-account'
class AccountComponent extends Component{
    allAcounts = []
    state={}
    createAccount(){
        console.log("Create Account Called")
        fetch(url.create_account,{
            method:'post',
            body:JSON.stringify({account_id:'naresh_01',name:'Naresh',details:'Accout for month of january',initial_amount:10000,created_at:"",updated_at:""}),
            headers:{'Content-type' :'application/json'}
        })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
        }).catch((e)=>{
            console.log("Error encountered while fetching",e)
        });
    }


    getAccounts(){
        console.log("Get All Account Called")
        fetch(url.get_accounts,{
            method:'get',
        })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({allAcounts:myJson})
          console.log('Fetched all data ',this.state.allAcounts);
        }).catch((e)=>{
            console.log("Error encountered while fetching",e)
        });

    }

    componentDidMount(){
        console.log('Components did mount called')
        this.getAccounts()
    }

    render(){
        return(<div className='mainDiv container-fluid'>
                <div className='header'>Choose an account or create One</div>
                
                <ListAccounts accounts={this.state.allAcounts}></ListAccounts>
                <button className='btn btn-primary'onClick={this.createAccount} >Create Account</button>    
        </div>)
    }
}
export default AccountComponent;