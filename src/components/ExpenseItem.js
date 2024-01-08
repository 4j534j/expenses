import './ExpenseItem.css'

function ExpenseItem(props){
  
    return (
        <div className='expense-item'>
            <div>{props.expenseData.date.toString()}</div>
            
        </div>
    )
}
export default ExpenseItem