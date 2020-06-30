import React from 'react';

const FinancialRecordRow = props => {
  return (
    <tr>
      <th>
        <input
          type='checkbox'
          checked={props.record.selected}
          onChange={props.onRecordSelectionChange}
        />
      </th>
      <td>{props.record.title}</td>
      <td>{props.record.dueAt ? parseDateString(props.record.dueAt): '-'}</td>
      <td>{props.record.paidAt ? parseDateString(props.record.paidAt) : '-'}</td>
      <td>{`R$ ${props.record.value/100}`}</td>
    </tr>
  );
}

const parseDateString = (dateString) =>{
  const date = new Date(dateString)
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export { FinancialRecordRow }