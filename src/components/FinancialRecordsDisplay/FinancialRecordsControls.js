import React from 'react';

const FinancialRecordsControls = props => {

  const createNewRecord = () => {
    console.log('show create record modal placeholder')
  }

  return (
    <div className="financialRecordsControls">
      <input type='checkbox' onChange={(event) => props.toggleAllRecords(event.target.checked)} />
      <div>
        <button onClick={props.deleteSelectedRecords}>DELETE</button>
        <button onClick={createNewRecord}>CREATE</button>
      </div>
    </div>
  )
}

export { FinancialRecordsControls }