import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount }) {
  const [titles, setTitles] = useState(title);

  const clickHandler = () => {
    setTitles("Updated");
    console.log(titles);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titles}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
