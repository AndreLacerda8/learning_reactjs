import { useState } from 'react'
import { Card } from '../UI/Card'
import { ExpenseFilter } from './ExpenseFilter'
import { ExpenseItem } from './ExpenseItem'
import './Expenses.css'

export function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2021')

  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(item => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  )
}