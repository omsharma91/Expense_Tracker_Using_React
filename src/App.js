import ExpenseFilter from "./ExpenseFilter";
import ExpenseTrack from "./expenseTable";
import ExpenseContainer from "./expenseInput";
import Navbar from "./navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return ( 
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<ExpenseContainer/> }/>
        <Route path="/expense_track" element={<ExpenseTrack/> }/>
        <Route path="/expense_filter" element={<ExpenseFilter/> }/>
      </Routes>  
    </Router>
                
    </>   
    
  )
}

export default App;
