import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './expense-component.css'
import axios from 'axios'
import '../emConstants'
import CreateExpense from './CreateExpense/create-expense'
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

    componentDidUpdate(prevProps) {
        if(prevProps.selectedAccountID !== this.props.selectedAccountID) this.getAllExpenses()
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

     deleteRecord = (id)=>{
        axios.delete(urls.delete_expense+id,)
        .then((res)=>{
            console.log("This is delete response",res)
            location.reload()
        })
     }

     editExpense = (record)=>{
        console.log('This is edit expense id',record)
        console.log(this.props.history)
        this.props.history.push('createExpense',record)
     }
 
     renderTableData(){ 
           return this.state.allExpenses?.map((record)=>{
             return(<tr key={record.id}>
                     {
                         (this.state.expenseTableMap.filter((element)=>{return (element.toDisplay || this.props.selectedAccountID=='all')})).map((maping)=>{
                             return<td key={record.id+maping.field}>{record[maping.field]}</td>
                         })
                     }
                     <td className='btn-group'>
                         <span className='deleteBtn btn btn-sm btn-danger' onClick={()=>this.deleteRecord(record.id)}>Delete </span>
               
                         <span  onClick={()=>this.editExpense(record)} className="deleteBtn btn btn-sm btn-primary">Modify</span>
                     </td>
                 </tr>
                 )
             })
             
     }

    render(){
        return(
            <div>
    <div className='tableHEader'>Expenses For {this.state.selectedAccountName}</div>
                 <table className='table table-hover'>
                    <thead>
                         <tr>
                             {this.renderTableHeader()}   
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderTableData()}
                    </tbody>
                </table>   
            </div>
        )
        }}

export default withRouter(ExpenseComponent)