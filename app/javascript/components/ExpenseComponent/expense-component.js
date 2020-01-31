import React, { Component } from 'react'
import './expense-component.css'
import axios from 'axios'
import '../emConstants'
// import {withNavigation} from 'react-navigation'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ExpenseComponent extends Component {
    constructor(props) {
        super(props)
    }



    getAllExpenses() {
        console.log('Calling get Expense')
        axios.get(urls.get_expenses, { params: { account_id: 'all' } })
            .then((response) => {
                console.log('All ACounts list', response.data)
            })
            .catch((err) => {
                console.log("Following error response from server : ", err)
            })
    }

    createExpense = () => {
        //   this.props.navigation.navigate('create')
    }

    render() {
        return (
            <div>
                <h2>This Is Expenses component</h2>
                <button className='btn btn-primary' onClick={this.getAllExpenses}>Get All Expenses</button>
                <span className='glyphicon glyphicon-plus'></span>
                <Link to="createExpense">Create Expense</Link>
            </div>
        )
    }
}

export default (ExpenseComponent)