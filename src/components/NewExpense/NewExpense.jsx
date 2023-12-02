/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(prop) {
  const [isEditing, SetisEditing] = useState(false);

  function isEditingHandler() {
    SetisEditing((prevValue) => {
      return !prevValue;
    });
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    prop.onAddEpxense(expenseData);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onSubmitDataHandler={saveExpenseDataHandler} />
      )}
    </div>
  );
}

export default NewExpense;
