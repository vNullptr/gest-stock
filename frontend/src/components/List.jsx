import React, { useState } from 'react'
import Dots from "../assets/icons/dotsIcon"

const List = ({Headers, Data, editHandler}) => {
    const [Hovered, setHovered] = useState(null)

  return (
    <div className='flex flex-col w-full space-y-2'>
        <div className="flex flex-row p-2 pl-5 text-sm text-gray-500 font-light">
            {
                Headers.map((header)=>{
                    return <div key={header?.key} style={{minWidth:`${header?.width}%`}}>
                        <p className='w-fit'>
                            {header?.label}
                        </p>
                        </div>        
                })
            }
            <div className="w-[15%]"></div>
        </div>

        {
            Data.map((row, index)=>{
                return (
                    <div className="flex flex-row items-center p-2 pl-5 rounded-sm shadow-sm bg-white h-18 cursor-default" onMouseEnter={()=>setHovered(index)}>
                       {Headers.map((header)=>{
                            return (header?.tag ? 
                                <div key={header?.key} style={{minWidth: `${header?.width}%`, maxWidth: `${header?.width}%`}}>
                                    <p key={header?.key} className="rounded-md outline outline-gray-200 w-fit px-1">{row?.[header?.key]}</p> 
                                </div>
                            
                            : 
                                <div key={header?.key} style={{minWidth: `${header?.width}%`,maxWidth: `${header?.width}%`}}>
                                    <p className='w-fit'>{row?.[header?.key]}</p>
                                </div>
                            )        
                        })}
                        <div className="flex flex-row justify-end items-center">
                            <button className={`w-6 h-6 ${Hovered == index ? "" : "opacity-0"}`} onClick={()=>{editHandler(row?.id)}}>
                                <div className="hover:scale-120 transition-all transition-500 p-1 rounded-full">
                                    <Dots className="text-gray-500 text-right"/>
                                </div>
                            </button>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default List