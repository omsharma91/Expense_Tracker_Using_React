import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./expenseInput";

export default function ExpenseList() {
  const { expenses } = useContext(ExpenseContext) || { expenses: [] };
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    expenses.forEach((item) => {
      if (item.type === "Income") {
        totalIncome += item.amount;
      } else {
        totalExpense += item.amount;
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  });

  return (
    <div className="container">
      <p>
        <strong>Balance:</strong> <span>{balance}</span>
      </p>
      <div className="record">
        <div className="income">
          <p><strong>Income</strong></p>
          <p>{income}</p>
        </div>
        <div className="expense">
          <p><strong>Expense</strong></p>
          <p>{expense}</p>
        </div>
      </div>
    </div>
  );
}
