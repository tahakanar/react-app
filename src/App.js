import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Computer",
      amount: 1094.12,
      date: new Date('July 20, 87 00:20:18')
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 234.12,
      date: new Date('July 20, 69 00:20:18')
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 940.12,
      date: new Date('July 20, 99 00:20:18')
    }
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
