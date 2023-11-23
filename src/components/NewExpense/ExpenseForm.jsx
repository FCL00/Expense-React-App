/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredTitle(value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredAmount(value);
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const incomingData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitDataHandler(incomingData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2022-01-01"
            max="2024-12-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

// one state approach
// const [InputValues, setInputValues] = useState({
//   title: "",
//   amount: "",
//   date: "",
// });

// const inputChangeHandler = (event) => {
//   const { name, value } = event.target;
//   setInputValues((preValue) => {
//     return {
//       ...preValue,
//       [name]: value,
//     };
//   });
//   console.log(InputValues);
// };
