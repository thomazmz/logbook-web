import React, { useEffect, useState } from 'react';
import { financialRecordsApi } from '../../api'
import { FinancialRecordsTable } from './FinancialRecordsTable'
import { FinancialRecordsControls } from './FinancialRecordsControls'

const FinancialRecordsDisplay = props => {

  const [records, setRecords ] = useState([])

  useEffect(() => {
    const getFinancialRecords = async () => {
      const fetchedRecords = await financialRecordsApi.getAll()
      fetchedRecords.forEach(record => record.selected = false)
      setRecords(fetchedRecords)
    }

    getFinancialRecords()
  }, [])

  const deleteSelectedRecords = () => {
    const selectedRecordsIds = records.filter(record => record.selected).map(record => record.id)
  }

  const toggleAllRecords = selectionStatus => {
    setRecords(records.map(record => {
      record.selected = selectionStatus
      return record
    }))
  }

  const toggleRecordById = recordId => {
    setRecords(records.map(record => {
      if(record.id === recordId) record.selected = !record.selected
      return record
    }))
  }

  return (
   <div className='financialRecordsDisplay'>
     <FinancialRecordsControls
      toggleAllRecords={toggleAllRecords}
      deleteSelectedRecords={deleteSelectedRecords}
     />
     <FinancialRecordsTable
      records={records}
      onRecordSelectionChange={toggleRecordById}
    />
   </div>
  )
}

export { FinancialRecordsDisplay }