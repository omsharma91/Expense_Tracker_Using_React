import ExpenseFilter from "./ExpenseFilter";
import ExpenseTrack from "./expenseTable";
import ExpenseContainer from "./expenseInput";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import ProtectedRoute from "./Protected_Route";
import Profile from "./Profile";
import Login from "./Login";
import { createContext } from "react";
export const ExpenseContext = createContext();

function App() {
  const [expenses,setExpenses] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <ExpenseContext.Provider value={{ expenses,setExpenses}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ExpenseContainer/>} />
          <Route path="/expense_track" element={<ExpenseTrack />} />
          <Route path="/expense_filter" element={<ExpenseFilter />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ExpenseContext.Provider>
  );
}

export default App;
