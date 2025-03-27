import React, { useContext, useState } from "react";
import { ExpenseContext } from "./expenseInput";

export default function ExpenseTrack() {
  const { expenses, setExpenses } = useContext(ExpenseContext) || {
    expenses: [],
  };
  console.log(expenses);
  const [editedId, setEditedId] = useState(null);
  const [editedExpense, setEditedExpense] = useState(null);
  const handelDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const handelEdit = (expense) => {
    setEditedId(expense.id);
    setEditedExpense(expenses);
  };
  const handelChange = (e) => {
    setEditedExpense({ ...editedExpense, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Particular</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr>
                <td>
                  {editedId === expense.id ? (
                    <input
                      name="date"
                      value={editedExpense.date}
                      onChange={handelChange}
                    />
                  ) : (
                    expense.date
                  )}
                </td>
                <td>{expense.expenseName}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    onClick={() => {
                      handelDelete(expense.id);
                    }}
                  >
                    X
                  </button>
                  <button
                    onClick={() => {
                      handelEdit(expense);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Expenses Added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
