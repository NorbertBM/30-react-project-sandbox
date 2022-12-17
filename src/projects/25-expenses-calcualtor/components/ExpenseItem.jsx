import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { ExpenseItemStyle } from "./styles/ExpenseItam.style";
export default function ExpenseItem({ expense, handleEdit, handleDelete }) {
  const { id, charge, date, amount } = expense;
  return (
    <ExpenseItemStyle>
      <div className="expense-details">
        <div
          className="d-flex flex-column"
          style={{ alignItems: "flex-start" }}
        >
          <h4 className="text-primary"> {charge}</h4>
          <small className="text-danger">{date}</small>
        </div>
        <div className="text-success">${amount}</div>
        <div>
          <button className="btn btn-sm" onClick={() => handleEdit(id)}>
            <MdEdit />
          </button>{" "}
          <button className="btn btn-sm" onClick={() => handleDelete(id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </ExpenseItemStyle>
  );
}
