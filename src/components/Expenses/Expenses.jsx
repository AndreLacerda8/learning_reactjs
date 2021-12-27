import { useState } from 'react'
import { Card } from '../UI/Card'
import { ExpenseFilter } from './ExpenseFilter'
import { ExpensesList } from './ExpensesList'

import './Expenses.css'
import { ExpensesChart } from './ExpensesChart'

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}