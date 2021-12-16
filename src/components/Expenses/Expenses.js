import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
