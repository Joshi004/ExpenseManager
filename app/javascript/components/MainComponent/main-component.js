import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'
import AccountsComponent from '../AccountsComponent/accounts-component'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <div className='appHeader'>Expense Manager</div>
                <Router>
                    <React.Fragment>
                        <Route exact path = "/accounts" component = {AccountsComponent} />
                    </React.Fragment>
                </Router> 
                
            </div>
        )
    }
} 

export default MainComponent