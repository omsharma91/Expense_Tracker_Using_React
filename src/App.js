import ExpenseFilter from "./ExpenseFilter";
import ExpenseTrack from "./expenseTable";
import ExpenseContainer from "./expenseInput";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState } from "react";
import { createContext } from "react";
export const ExpenseContext = createContext();

function App() {
  const [expenses,setExpenses] = useState([]);
  return (
    <ExpenseContext.Provider value={{ expenses,setExpenses}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ExpenseContainer/>} />
          <Route path="/expense_track" element={<ExpenseTrack />} />
          <Route path="/expense_filter" element={<ExpenseFilter />} />
        </Routes>
      </Router>
    </ExpenseContext.Provider>
  );
}

export default App;
