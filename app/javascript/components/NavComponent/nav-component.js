import React, { Component } from 'react'
class NavComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Expense Manager</a>
                        </div>
                        <ul style={{flexDirection:"row"}} className="nav navbar-nav">
                            <li className="active"><a href="#">Home | </a></li>
                            <li><a href="/expense/createExpense"> New Expense | </a></li>
                            <li><a href="/accounts"> Accounts | </a></li>
                            <li><a href="#"> {localStorage.selectedAccountName}</a></li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default NavComponent