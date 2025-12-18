import React from 'react'
import Table from '../components/Table.jsx'
import Window from '../components/Window.jsx'

const Inventory = () => {
  return (
    <div className="h-full p-5 flex flex-col">
        <Table/>
        <Window/>
    </div>
  )
}

export default Inventory