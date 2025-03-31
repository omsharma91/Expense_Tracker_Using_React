import React, { useContext, useState } from "react";
import ExpenseList from "./expenseList";
import { ExpenseContext } from "./App";
import ExpenseTrack from "./expenseTable";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ExpenseContainer() {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    type: "Income",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.expenseName || !formData.amount || !formData.date) {
      alert("Please fill all fields.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount), // Ensure amount is a number
    };

    setExpenses([...expenses, newExpense]); // Add new expense to list
    setFormData({ expenseName: "", amount: "", type: "Income", date: "" }); // Reset form
  };

  return (
    <>
      <ExpenseList />
      <div className="d-flex justify-content-space-evenly m-4 mb-5">
        <ExpenseTrack />
        <div>
          <form onSubmit={handleSubmit} className="border p-4 box">
            <div className="d-flex flex-column justify-content-center gap-4 ">
              <h1 className="titleAdd">Add New Expense/Income</h1>
              <input
                type="text"
                name="expenseName"
                className="inputwidth"
                onChange={handleChange}
                value={formData.expenseName}
                placeholder="Enter the expense / income"
              />

              <input
                type="number"
                name="amount"
                className="inputwidth"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter the amount"
              />

              <select name="type" className="inputwidth" value={formData.type} onChange={handleChange}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>

              <input
                type="date"
                name="date"
                className="inputwidth"
                value={formData.date}
                onChange={handleChange}
              />

              <button type="submit" className='w-50 p-1 ms-5 '>Add Expense / Income</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
