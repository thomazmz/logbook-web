import React from 'react';

function ExpensesListItem(props) {
  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{'R$' + props.item.value}</td>
    </tr>
  );
}

export default ExpensesListItem;