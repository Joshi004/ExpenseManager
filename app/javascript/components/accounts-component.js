import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import  '../components/emConstants'
// import './accounts-component.css';
class AccountComponent extends Component{
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
          console.log(myJson);
        }).catch((e)=>{
            console.log("Error encountered while fetching",e)
        });
    }

    render(){
        return(<div className='mainDiv'>
                <div>Choose The Account or create One</div>
                <div>
                <button onClick={this.createAccount} >Create Account</button>
                </div>
        </div>)
    }
}
export default AccountComponent;