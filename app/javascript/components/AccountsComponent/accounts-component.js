import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import  '../emConstants'
import './accounts-component.css';
import ListAccounts from './list-accounts/list-account'
import CreateAccount from './create-account/create-account';
class AccountComponent extends Component{
    allAcounts = []
    state={}

    toggleAccountView(value){
        this.setState({listView:value})
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
               <div className='tabsContainer'>
                    <ul className="tabsUl nav nav-tabs">
                        <li className="tabsLi active">
                            <button className='tabBtn btn btn-secondary'onClick={()=>this.toggleAccountView(false)} >New Account</button> 
                        </li>
                        <li className='tabsLi'>
                            <button className='tabBtn btn btn-secondary'onClick={()=>this.toggleAccountView(true)} >List Accounts</button> 
                        </li>
                    </ul>
               </div>
               { this.state.listView?<ListAccounts getAccounts = {this.getAccounts} accounts={this.state.allAcounts}></ListAccounts> : <CreateAccount></CreateAccount>}
        </div>)
    }
}
export default AccountComponent;