import React from 'react';

function ExpensesListItem(props) {
  return (
    <li>
      <p>{props.item.title}</p>
      <p>{props.item.value}</p>
    </li>
  );
}

export default ExpensesListItem;