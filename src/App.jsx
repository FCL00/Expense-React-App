/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: Math.random().toString(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: Math.random().toString(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpense(expenseData) {
    setExpenses((prevValues) => {
      return [expenseData, ...prevValues];
    });
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddEpxense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
