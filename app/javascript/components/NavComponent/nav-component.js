import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class NavComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Expense Manager</a>
                        </div>
                    {/* <Router>
                        <ul style={{flexDirection:"row"}} className="nav navbar-nav">
                            <li className="active"><Link to="/">Home | </Link></li>
                            <li><Link to = "/createExpense"> New Expense | </Link></li>
                            <li><Link to = "/accounts"> Accounts | </Link></li>
                            <li><Link to="/"> {localStorage.selectedAccountName}</Link></li>
                        </ul>
                    </Router> */}
                    
                    </div>
                </nav>
        )
    }
}

export default NavComponent