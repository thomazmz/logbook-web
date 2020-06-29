import React, { useEffect, useState } from 'react';
import { financialRecordsApi } from '../../api'
import { FinancialRecordRow } from './FinancialRecordRow'

const FinancialRecordsTable = props => {

  const [financialRecords, setFinancialRecords ] = useState([])

  useEffect(() => {
    const getFinancialRecords = async () => {
      const fetchedFinancialRecords = await financialRecordsApi.get()
      setFinancialRecords(fetchedFinancialRecords.data)
    }

    getFinancialRecords()
  }, [])

  return (
    <div class="financialRecordsTable">
      <table>
        <tbody>
          {financialRecords.map((fr, index) => (
            <FinancialRecordRow key={index} index={index} item={fr} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export { FinancialRecordsTable }