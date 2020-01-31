import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'
import AccountsComponent from '../AccountsComponent/accounts-component'
import ExpenseComponent from '../ExpenseComponent/expense-component'
import CreateExpenseComponent from '../ExpenseComponent/CreateExpense/create-expense'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MainComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("Navigation in parent",this.props)
        return(
            <div>
                <div className='appHeader text-primary bg-secondary'>Expense Manager</div>
                <Router>
                    <React.Fragment>
                        <Route exact path = "/accounts" component = {AccountsComponent} />
                        <Route component = {ExpenseComponent}/>
                        <Route exact path = "/createExpense" component = {CreateExpenseComponent} />
                    </React.Fragment>
                </Router> 
                
            </div>
        )
    }
} 

export default MainComponent