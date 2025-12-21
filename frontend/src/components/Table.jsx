import React, { useState } from 'react'
import Dots from "../assets/icons/dotsIcon"

const Table = ({Headers, Data, editHandler}) => {

  const [Hovered, setHovered] = useState(null)

  return (
    <>
      <div className="overflow-scroll bg-white p-2">
        <table className="w-full rounded-lg select-none">
          <thead className="">
            <tr className="[&>td]:px-5 text-sm font-bold text-left text-gray-600 h-10">
              {Headers.map((v)=>{
                return <td key={v?.key} style={{width: `${v?.width}%`}}>{v?.label}</td>
              })}
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Data !== undefined &&
              Data.map((row,i)=>{
                return (
                  <tr key={i} className="[&>td]:px-5 text-sm text-left text-gray-500 border-t border-gray-200 h-10" onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}>
                  {Headers.map((header)=>{
                    return (header?.tag ? 
                        <td key={header?.key}>
                            <p key={header?.key} className="rounded-md outline outline-gray-200 w-fit px-1">{row?.[header?.key]}</p> 
                        </td>
                    : 
                        <td key={header?.key}>
                            <p className='w-fit'>{row?.[header?.key]}</p>
                        </td>
                    ) 
                    
                  })}
                  <td>
                    <div className="flex flex-row justify-end items-center">
                      <button className={`w-6 h-6 ${Hovered == i ? "" : "opacity-0"}`} onClick={()=>{editHandler(row?.id)}}>
                        <div className="hover:scale-120 transition-all transition-500 p-1 rounded-full">
                          <Dots className="text-gray-500 text-right"/>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
        {Data.length > 0 || <div className="w-full text-center"> Chargement ... </div>}
      </div>
    </>
  )
}

export default Table