import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          amount={props.items[0].amount}
          title={props.items[0].title}
          date={props.items[0].date}
        />
        <ExpenseItem
          amount={props.items[1].amount}
          title={props.items[1].title}
          date={props.items[1].date}
        />
        <ExpenseItem
          amount={props.items[2].amount}
          title={props.items[2].title}
          date={props.items[2].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
