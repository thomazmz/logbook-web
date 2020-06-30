import React from 'react';

import { FinancialRecordRow } from './FinancialRecordRow'

const FinancialRecordsTable = props => {
  return (
    <table>
      <tbody>
        {props.records && props.records.map((record) => (
          <FinancialRecordRow
            record={record}
            key={`financialRecord_${record.id}`}
            onRecordSelectionChange={() => props.onRecordSelectionChange(record.id)}
          />
        ))}
      </tbody>
    </table>
  )
}

export { FinancialRecordsTable }