import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    list: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitAmount = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const updated = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    if (type === 'Income') {
      this.setState(prevState => ({
        list: [...prevState.list, updated],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].displayText,
        income: prevState.income + parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, updated],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].displayText,
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
  }

  deleteTransaction = Id => {
    const {list} = this.state
    const getDelete = list.filter(eachId => Id === eachId.id)
    const getFilter = list.filter(eachFilter => Id !== eachFilter.id)

    if (getDelete[0].type === 'Income') {
      this.setState(prevState => ({
        list: getFilter,
        income: prevState.income - parseInt(getDelete[0].amount),
        balance: prevState.balance - parseInt(getDelete[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        list: getFilter,
        expenses: prevState.expenses - parseInt(getDelete[0].amount),
        balance: prevState.balance + parseInt(getDelete[0].amount),
      }))
    }
  }

  render() {
    const {title, amount, type, list, balance, income, expenses} = this.state
    return (
      <div className="money-container">
        <div className="name-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="name-para">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="bottom-container">
          <div className="transaction-container">
            <h1 className="bottom-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onSubmitAmount}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input-form"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="tel"
                id="amount"
                className="input-form"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="input-form"
                value={type}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="submit-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="statement-container">
              <div className="box">
                <p className="para">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
              </div>
            </div>
            <ul className="u-list">
              {list.map(eachList => (
                <TransactionItem
                  key={eachList.id}
                  itemList={eachList}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
