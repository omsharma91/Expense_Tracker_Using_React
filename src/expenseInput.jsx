import React, { useContext, useState } from "react";
import ExpenseList from "./expenseList";
import { ExpenseContext } from "./App";

export default function ExpenseContainer() {
  const {expenses,setExpenses} = useContext(ExpenseContext);
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
      <form onSubmit={handleSubmit} className="expenseContainer">
        <div className="input">
          <input
            type="text"
            name="expenseName"
            onChange={handleChange}
            value={formData.expenseName}
            placeholder="Enter the expense / income"
          />

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter the amount"
          />

          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <button type="submit">Add Expense / Income</button>
        </div>
      </form>
      <ExpenseList />
    </>
  );
}
