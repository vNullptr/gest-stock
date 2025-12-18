import React from 'react'

const Table = ({Headers, Data, editHandler}) => {

  return (
    <>
      <div className="overflow-scroll bg-white rounded-xl shadow-sm p-6">
        <table className="w-full rounded-lg select-none">
          <thead className="">
            <tr className="[&>td]:px-5 text-sm font-bold text-left text-gray-600 h-10">
              {Headers.map((v)=>{
                return <td key={v.key} className={`w-[${v.width}%]`}>{v.label}</td>
              })}
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Data !== undefined &&
              Data.map((row,i)=>{
                return (
                  <tr key={i} className="[&>td]:px-5 text-sm text-left text-gray-500 h-15">
                  {Headers.map((header)=>{
                    return <td>{row[header.key]}</td>
                  })}
                  <td>
                    <div className="flex flex-row justify-end items-center">
                      <button className="w-5 h-5 border border-black" onClick={()=>{editHandler(row["id"])}}></button>
                    </div>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table