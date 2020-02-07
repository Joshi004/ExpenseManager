import React from 'react'
import ReactDOM from 'react-dom'
import './main-component.css'
import AccountsComponent from '../AccountsComponent/accounts-component'
import ExpenseComponent from '../ExpenseComponent/expense-component'
import NavComponent from '../NavComponent/nav-component'
import CreateExpenseComponent from '../ExpenseComponent/CreateExpense/create-expense'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'
class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedAccountID: localStorage.selectedAccountID,
            selectedAccountName: localStorage.selectedAccountName
        }
        console.log("props at start", this.props)
    }

    saveAccounts = (data) => {
        console.log('accounts saved in paremt', this.state)
        this.setState({ ...this.state, 'allAccounts': data }, () => {
            console.log('accounts saved in parent', this.state)
        })
        console.log('accounts saved in parent this is ouit of scipe', this.state)
    }

    componentDidMount() {
        if (!this.state.allAccounts) {
            console.log('Accounts not found')
            this.getAccounts()
        }
    }

    getAccounts = () => {
        console.log('fetching accounts from main')
        fetch(urls.get_accounts, {
            method: 'get',
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ 'allAccounts': myJson })
            }).catch((e) => {
                console.log("Error encountered while fetching", e)
            });
    }

    changeDefaultAccount(account) {
        console.log('This is click event', account)
        this.setState({ 'selectedAccountName': account.name, 'selectedAccountID': account.id })
        localStorage.selectedAccountID = account.id
        localStorage.selectedAccountName = account.name
    }

    renderDropDownList() {
        console.log("all accounts in main : ", this.state.allAccounts)
        return this.state.allAccounts?.map((account) => {
            return <div key={account.id} onClick={() => this.changeDefaultAccount(account)} className="dropdown-item">{account.name}</div>
        })
    }


    render() {
        console.log("Navigation in parent", this.props)
        return (
            // <div className='mainDiv' style={{ background: '../../../assets/images/image01.png' }} className=''>
            //     <NavComponent></NavComponent>

                <Router history={History}>
                    <React.Fragment>
                        <ul style={{ flexDirection: "row-reverse" }} className="nav navbar-nav">
                            <li className="active"><Link to="/">Home &nbsp;&nbsp; </Link></li>
                            <li><Link to="/expenses"> Expenses &nbsp;|&nbsp; </Link></li>
                            <li><Link to="/createExpense"> Record Expense &nbsp;|&nbsp; </Link></li>
                            <li><Link to="/accounts">&nbsp;|&nbsp; Accounts  &nbsp;|&nbsp; </Link></li>
                            <li><div className="dropdown btn btn-link">
                                <a className="dropdown-toggle" data-toggle="dropdown">

                                    {this.state.selectedAccountName}
                                </a>
                                <div className="dropdown-menu">
                                    <div key='all' onClick={() => this.changeDefaultAccount({ id: 'all', name: 'All' })} className="dropdown-item">All</div>
                                    {this.renderDropDownList()}
                                </div>
                            </div>
                            </li>
                        </ul>
                        <Route exact path="/home" component={AccountsComponent} />
                        <Route exact path="/accounts" render={(props) => <AccountsComponent {...props} {...this.state} />} />
                        <Route exact path="/expenses" render={(props) => <ExpenseComponent  {...props} {...this.state} />} />
                        <Route exact path="/createExpense" render={(props) => <CreateExpenseComponent {...props} {...this.state} />} />
                        <Route exact path="/createExpense:/id" render={(props) => <CreateExpenseComponent {...props} {...this.state} />} />
                        {/* <Route exact path = "/" component = {AccountsComponent} /> */}
                    </React.Fragment>
                </Router>





            // </div>
        )
    }
}

export default (MainComponent)