import React from 'react'

const Table = ({tableHead, rowData}) => {

  const listElements = []
  for (let i = 0; i < 25; i++) {
    listElements.push(
    <tr className="[&>td]:p-2 [&>td]:text-left [&>td]:font-light [&>td]:text-sm shadow-sm h-15 rounded-lg">
      <td>{i}</td>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
      <td>
        <div className="flex flex-row justify-end items-center">
          <button className="w-5 h-5 border border-black"></button>
        </div>
      </td>
    </tr>)
  }

  return (
    <>
      <div className='overflow-scroll'>
        <table className='bg-white w-full rounded-lg select-none border-separate border-spacing-5'>
          <thead className="bg-white">
            <tr className=" [&>td]:p-2 [&>td]:font-bold [&>td]:text-left [&>td]:text-sm">
              <td className="w-[5%]">ID</td>
              <td className="w-[50%]">Nom Produit</td>
              <td className="W-[15%]">Stock</td>
              <td className="W-[15%]">Prix</td>
              <td className="W-[15%]"></td>
            </tr>
          </thead>
          <tbody className="">
            {listElements}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table