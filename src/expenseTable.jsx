import React, { useContext, useState } from "react";
import { ExpenseContext } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ExpenseTrack() {
  const { expenses, setExpenses } = useContext(ExpenseContext) || {
    expenses: [],
  };
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
    setEditedExpense((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSave = () => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === editedId ? editedExpense : expense
      )
    );
    setEditedId(null);
    setEditedExpense(null);
  };
  const handleCancel = () => {
    setEditedExpense(null);
    setEditedId(null);
  };
  return (
    <div className="border">
      <table>
        <thead>
          <tr className='bg-success'>
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

                <td>
                  {editedId === expense.id ? (
                    <input
                      name="expenseName"
                      value={editedExpense.expenseName}
                      onChange={handelChange}
                    />
                  ) : (
                    expense.expenseName
                  )}
                </td>

                <td>
                  {editedId === expense.id ? (
                    <input
                      name="type"
                      value={editedExpense.type}
                      onChange={handelChange}
                    />
                  ) : (
                    expense.type
                  )}
                </td>
                <td>
                  {editedId === expense.id ? (
                    <input
                      name="amount"
                      value={editedExpense.amount}
                      onChange={handelChange}
                    />
                  ) : (
                    expense.amount
                  )}
                </td>
                <td>
                    {editedId === expense.id ? (
                      <div className="d-flex flex-row gap-3"
                      
                      >
                        <button onClick={handleSave}>save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </div>
                    ) : (
                      <div className="d-flex flex-row gap-3">
                        <button onClick={()=>{
                          handelEdit(expense)
                        }}>✏️ </button>
                        <button
                        className='w-25'
                          onClick={() => {
                            handelDelete(expense.id);
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    )}
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
