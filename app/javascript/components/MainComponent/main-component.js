import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'

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