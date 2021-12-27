import { useState } from 'react'
import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NexExpense/NewExpense'

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 7, 18) },
  { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2021, 3, 13) },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  function addExpenseHandler(expense) {
    setExpenses(prevState => [expense, ...prevState])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
