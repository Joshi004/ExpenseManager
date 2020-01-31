import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import  '../../emConstants'

class ListAccounts extends Component{
    constructor(props){
        super(props)
    }

    state={}

    renderTableHeader(){
        return accountTableMap.map(element => {
             return <th key={element.field}>{element.label}</th>
           })
     }
 
     renderTableData(){ 
           return this.props.accounts?.map((account)=>{
             return(<tr key={account.id}>
                     {
                         accountTableMap.map((maping)=>{
                             return<td key={account.id+maping.field}>{account[maping.field]}</td>
                         })
                     }
                 </tr>)
             })
             
     }

    render(){
        return(
            <div>
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
        }
}

export default ListAccounts