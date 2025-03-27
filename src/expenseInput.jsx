import React, { createContext, useState } from "react";
import ExpenseList from "./expenseList";
import ExpenseTable from "./expenseTable";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseTrack from "./expenseTable";

export const ExpenseContext = createContext();

export default function ExpenseContainer() {
  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    type: "Income",
    date: "",
  });

  const [expenses, setExpenses] = useState([]); // Stores all expenses

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
    <ExpenseContext.Provider value={{ expenses,setExpenses}}>
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
      <ExpenseTrack/>
      <ExpenseFilter/>
    </ExpenseContext.Provider>
  );
}
