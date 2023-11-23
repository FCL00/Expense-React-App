/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const displayExpensesItem = (expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(displayExpensesItem)}
      </Card>
    </div>
  );
}

export default Expenses;

// the derived compute state will be use inside the Expenses function
// let filteredInfoText = "2022";

//   if (filteredYear === "2022") {
//     filteredInfoText = "2023";
//   } else if (filteredYear === "2023") {
//     filteredInfoText = "2022";
//   } else {
//     filteredInfoText = "2022";
//   }

// <p>data from {filteredInfoText} is hidden</p>

{
  /* <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
    />
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    />
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    />
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    /> */
}
