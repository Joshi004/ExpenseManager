import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AccountsComponent from '../AccountsComponent/accounts-component'

class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <div className='appHeader'>Expense Manager</div>
                <AccountsComponent></AccountsComponent>
            </div>
        )
    }
} 

export default MainComponent