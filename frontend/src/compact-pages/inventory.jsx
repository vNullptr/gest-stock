import React from 'react'
import Table from '../components/Table.jsx'
import Window from '../components/Window.jsx'

const Inventory = () => {

  const windowContent = () => (
    <div className="w-full h-full p-5 flex flex-col w-full">
      <h1 className="text-4xl font-bold ">Edit</h1>
      <div className="w-full h-full flex py-5 items-between justify-center">
        <form className="flex flex-col w-[80%]">
          <label className="flex flex-col w-full">
            test1
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 "></input>
          </label>
          <div className="flex flex-row">
            <label className="flex flex-col w-1/2 mr-5">
              test2
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 "></input>
            </label>
            <label className="flex flex-col w-1/2">
              test3
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 "></input>
            </label>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className="h-full p-5 flex flex-col">
        <Table/>
        <Window WindowContent={windowContent}/>
    </div>
  )
}

export default Inventory