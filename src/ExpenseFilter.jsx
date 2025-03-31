import React, { useState } from "react";
import { ExpenseContext } from "./App";
import { useContext } from "react";

export default function ExpenseFilter() {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [filterExpense, setFilterExpense] = useState({});
  const [Date, setDate] = useState(null);
  const handelDate = (e) => {
    setDate(e.target.value);
  };

  const getExpenses = () => {
    setFilterExpense(expenses.filter((expense) => expense.date === Date));
    console.log(filterExpense);
  };
  return (
    <div>
      <div className="expenseFilter">
        <h1>Get your expense track</h1>
        <span>Put the date for your transaction history : <input type="date" onChange={handelDate} /></span>
        <button onClick={getExpenses}>Get Transaction history</button>
      </div>
      <table className='border'>
        <thead>
          <tr className='bg-success'>
            <th>Date</th>
            <th>Particular</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filterExpense.length > 0 ? (
            filterExpense.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.expenseName}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
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
