/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(prop) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    prop.onAddEpxense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitDataHandler={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
