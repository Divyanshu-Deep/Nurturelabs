import React from 'react'
import TableForm from './TableForm'
const Table = ({table}) => {
  
    return (
        <div className="table-data">
            <div className="table-row-1">
            <div className="text-1">
                The term you are tracking
            </div>
            <div className="text-2">
                The data will refresh every 5 min
            </div>
            </div>
            <div className="table-row-2">
                    <TableForm table={table}/>
            </div>
        </div>
    )
}

export default Table
