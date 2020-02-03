import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'
import AccountsComponent from '../AccountsComponent/accounts-component'
import ExpenseComponent from '../ExpenseComponent/expense-component'
import NavComponent from '../NavComponent/nav-component'
import CreateExpenseComponent from '../ExpenseComponent/CreateExpense/create-expense'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class MainComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        localStorage.selectedAccountName = "March"
        // this.state={'allAccounts':''}
        console.log("props at start",this.props)

    }
    
    saveAccounts = (data)=>{
        console.log('accounts saved in paremt',this.state)
        this.setState({...this.state,'allAccounts':data},()=>{
            console.log('accounts saved in parent',this.state)
        })
        console.log('accounts saved in parent this is ouit of scipe',this.state)
    }

    
    render(){
        console.log("Navigation in parent",this.props)
        return(
            <div className='mainDiv' style={{background:'../../../assets/images/image01.png'}} className=''>
                <NavComponent></NavComponent>
                <Router>
                    <React.Fragment>
                    <ul style={{flexDirection:"row-reverse"}} className="nav navbar-nav">
                            <li className="active"><Link to="/">Home &nbsp;&nbsp; </Link></li>
                            <li><Link to = "/expenses"> Expenses &nbsp;|&nbsp; </Link></li>
                            <li><Link to = "/createExpense"> Record Expense &nbsp;|&nbsp; </Link></li>
                            <li><Link to = "/accounts"> Accounts &nbsp;|&nbsp; </Link></li>
                            <li><Link to="/"> {localStorage.selectedAccountName}&nbsp;|&nbsp;</Link></li>
                        </ul>
                        <Route exact path = "/home" component = {AccountsComponent} />
                        <Route exact path = "/accounts" render = {(props) => <AccountsComponent {...props} saveAccounts={this.saveAccounts}/>}/>
                        <Route exact path = "/expenses" render = {(props) => <ExpenseComponent {...props} allAccounts={this.state.allAccounts}/>}/>
                        <Route exact path = "/createExpense" render = {(props) => <CreateExpenseComponent {...props} allAccounts={this.state.allAccounts}/>}/>
                        {/* <Route exact path = "/" component = {AccountsComponent} /> */}
                    </React.Fragment>
                </Router> 
                
            </div>
        )
    }
} 

export default MainComponent