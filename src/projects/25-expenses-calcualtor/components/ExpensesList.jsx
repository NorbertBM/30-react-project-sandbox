import React from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";
export default function ExpensesList({
  expenses,
  handleClearAllExpenses,
  handleDelete,
  handleEdit,
}) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn btn-danger" onClick={handleClearAllExpenses}>
          <MdDelete /> Clear all expenses
        </button>
      )}
    </>
  );
}
