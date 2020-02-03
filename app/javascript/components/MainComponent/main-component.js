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
        localStorage.selectedAccountName = "March"
    }
    render(){
        console.log("Navigation in parent",this.props)
        return(
            <div className='mainDiv' style={{background:'../../../assets/images/image01.png'}} className=''>
                <NavComponent></NavComponent>
                <Router>
                    <React.Fragment>
                    <ul style={{flexDirection:"row"}} className="nav navbar-nav">
                            <li className="active"><Link to="/">Home | </Link></li>
                            <li><Link to = "/createExpense"> New Expense | </Link></li>
                            <li><Link to = "/accounts"> Accounts | </Link></li>
                            <li><Link to="/"> {localStorage.selectedAccountName}</Link></li>
                        </ul>
                        <Route exact path = "/home" component = {AccountsComponent} />
                        <Route exact path = "/accounts" component = {AccountsComponent} />
                        <Route exact path = "/expenses" component = {ExpenseComponent}/>
                        <Route exact path = "/createExpense" component = {CreateExpenseComponent} />
                        {/* <Route exact path = "/" component = {AccountsComponent} /> */}
                    </React.Fragment>
                </Router> 
                
            </div>
        )
    }
} 

export default MainComponent