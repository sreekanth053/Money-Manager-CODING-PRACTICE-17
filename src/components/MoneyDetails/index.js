import './index.css'

// testid="balanceAmount"
// testid="incomeAmount"
// testid="expensesAmount"

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="money-details-boxes balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div className="amount-container">
          <p className="amount-name">Your Balance</p>
          <p className="amount">Rs {balance}</p>
        </div>
      </div>
      <div className="money-details-boxes income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div className="amount-container ">
          <p className="amount-name">Your Income</p>
          <p className="amount">Rs {income}</p>
        </div>
      </div>
      <div className="money-details-boxes expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div className="amount-container">
          <p className="amount-name">Your Expenses</p>
          <p className="amount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
