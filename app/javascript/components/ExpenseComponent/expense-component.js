import React, { Component } from 'react'
import './expense-component.css'
import axios from 'axios'
import '../emConstants'
// import {withNavigation} from 'react-navigation'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ExpenseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {'allExpenses':[],
        'expenseTableMap':expenseTableMap,
    }
    }

    componentDidMount(){
        this.getAllExpenses()
    }



    getAllExpenses() {
        console.log('Calling get Expense')
        axios.get(urls.get_expenses, { params: { account_id: this.props.selectedAccountID } })
            .then((response) => {
                console.log('All Expenses list', response)
                this.setState({'allExpenses':response.data})

            })
            .catch((err) => {
                console.log("Following error response from server : ", err)
            })
    }



    renderTableHeader(){
         return (this.state.expenseTableMap.filter((element)=>{ return (element.toDisplay || this.props.selectedAccountID=='all')})).map(element => {
             return <th key={element.field}>{element.label}</th>
           })
     }
 
     renderTableData(){ 
           return this.state.allExpenses?.map((record)=>{
             return(<tr key={record.id}>
                     {
                         (this.state.expenseTableMap.filter((element)=>{return (element.toDisplay || this.props.selectedAccountID=='all')})).map((maping)=>{
                             return<td key={record.id+maping.field}>{record[maping.field]}</td>
                         })
                     }
                 </tr>)
             })
             
     }

    render(){
        return(
            <div>
    <div className='tableHEader'>Expenses For {this.state.selectedAccountName}</div>
                 <table className='table table-hover'>
                    <thead>
                         <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>
                         {this.renderTableData()}
                    </tbody>
                </table>   
            </div>
        )
        }}

export default (ExpenseComponent)