import React from 'react'

const List = ({Headers, Data}) => {
  return (
    <div className='flex flex-col w-full justify-center space-y-2'>
        <div className="flex flex-row p-2 pl-5 text-sm text-gray-500 font-light">
            {
                Headers.map((header)=>{
                    return <div key={header?.key} className={`w-[${header?.width}%]`}>
                        <p className='w-fit'>
                            {header?.label}
                        </p>
                        </div>        
                })
            }
            <div className="w-[15%]"></div>
        </div>
        {
            Data.map((row)=>{
                return (
                    <div className="flex flex-row items-center p-2 pl-5 bg-white h-18">
                       {Headers.map((header)=>{
                            return (header?.tag ? 
                                <div className={`w-[${header?.width}%] max-w-[${header?.width}]`}>
                                    <p key={header?.key} className="rounded-md outline outline-gray-200 w-fit px-1">{row?.[header?.key]}</p> 
                                </div>
                            
                            : 
                                <div key={header?.key} className={`w-[${header?.width}%]`}>
                                    <p className='w-fit'>{row?.[header?.key]}</p>
                                </div>
                            )        
                        })}
                        <div className="ml-auto flex flex-row items-center justify-end w-[15%] h-full">
                            <button className="w-7 h-7 bg-red-600 ml-2"></button>
                            <button className="w-7 h-7 bg-green-600 ml-2"></button>
                            <button className="w-7 h-7 bg-blue-600 ml-2"></button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default List