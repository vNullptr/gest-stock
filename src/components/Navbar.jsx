import React, { useState } from 'react'

const Navbar = (props) => {

    const [Selected, setSelected] = useState(props.page)

    const clickHandler = (i) => {
        setSelected(i)
        props.changePage(Selected)
    }

  return (
    <div className="bg-white min-h-screen min-w-[200px] shadow-[5px_5px_25px_5px_rgba(0,0,0,0.02)]">
        <div className="border-1 border-[rgb(60,60,60)] w-[30px] h-[30px] mb-5 m-[5px]"></div>
        {props.pageList.map((e, index) => {
            const Icon = e.icon
            return (
            <div key={index} 
            onClick={()=>{clickHandler(index)}}
            className={`flex flex-row items-center h-8 w-full pl-1.5 text-[15px] font-semibold cursor-pointer ${ Selected == index && "bg-[rgba(204,102,0,0.1)] [&>a]:text-[rgba(204,102,0,1)] [&>div]:border-[rgba(204,102,0,1)]"} hover:[&>div]:border-[rgba(204,102,0,1)] hover:[&>a]:text-[rgba(204,102,0,1)] hover:bg-[rgba(204,102,0,0.08)] backdrop-blur-xs transition-all duration-100`}>
                <Icon className={`w-[15px] h-[15px] mr-1.5 text-[rgb(60,60,60)] ${ Selected == index && "text-[rgba(204,102,0,1)]"}`}/>
                <a className="text-[.825em] font-[14px] text-[rgb(60,60,60)]">{e.name}</a>
                {Selected == index && (
                    <span className="bg-[rgba(204,102,0,1)] w-[3px] h-full ml-auto"></span>
                )}
            </div>)
        })}
    </div>
  )
}

export default Navbar