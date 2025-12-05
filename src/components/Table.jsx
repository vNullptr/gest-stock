import React from 'react'

const Table = ({tableHead, rowData}) => {
  return (
    <>
      <div className="flex flex-col w-full rounded-[10px] bg-white [&>div]:rounded-[10px]">
        <div className="w-full h-10 bg-[rgba(243,245,249,1)] rounded-t-[10px]">
          <div></div>
        </div>
        <div className="w-full h-10">
          <div></div>
        </div>
        <div className="w-full h-10">
          <div></div>
        </div>
        <div className="w-full h-10">
          <div></div>
        </div>
        <div className="w-full h-10">
          <div></div>
        </div>
        <div className="w-full h-10">
          <div></div>
        </div>
        <div className="w-full h-10 rounded-b-[10px]">
          <div></div>
        </div>
        
      </div>
    </>
  )
}

export default Table