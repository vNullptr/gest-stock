import React from 'react'
import Table from '../components/Table.jsx'

const Dashboard = () => {

  const tableHead = ["head1","head2","head3","head4"]

  return (
    <div className="p-10">
        <Table tableHead={tableHead} rowData={tableHead}/>
    </div>
  )
}

export default Dashboard