import './ExpenseDate.css'

export function ExpenseDate(props) {
  const month = props.date.toLocaleString('pt-BR', { month: 'long' })
  const day = props.date.getDate() + 1
  const year = props.date.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}