import './index.css'

// testid="delete"

const TransactionItem = props => {
  const {deleteTransaction, itemList} = props
  const {title, amount, type, id} = itemList

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="statement-container1">
      <div className="box1">
        <p className="para1">{title}</p>
        <p className="para1">Rs {amount}</p>
        <p className="para1">{type}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
