/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(prop) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
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
