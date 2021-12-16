import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Computer",
      amount: 1094.12,
      date: new Date(2018, 8, 24),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 234.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 940.12,
      date: new Date(2020, 2, 19),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app");
    console.log(expense);
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
