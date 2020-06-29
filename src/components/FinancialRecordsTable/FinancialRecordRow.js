import React from 'react';

const FinancialRecordRow = props => {
  return (
    <tr>
      <th><input type='checkbox'/></th>
      <td>{props.item.title}</td>
      <td>{props.item.dueAt ? parseDateString(props.item.dueAt): '-'}</td>
      <td>{props.item.paidAt ? parseDateString(props.item.paidAt) : '-'}</td>
      <td>{`R$ ${props.item.value/100}`}</td>
    </tr>
  );
}

const parseDateString = (dateString) =>{
  const date = new Date(dateString)
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export { FinancialRecordRow }