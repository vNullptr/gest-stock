import React, { useState } from 'react'

const Navbar = (props) => {

    const [Selected, setSelected] = useState(props.page)

    const clickHandler = (i) => {
        setSelected(i)
        props.changePage(i)
    }

    return (
        <div className="bg-white min-h-screen min-w-[150px]">
        <div className="border border-accent w-[30px] h-[30px] mb-5 m-[5px]"></div>
        {props.pageList.map((e, index) => {
            const Icon = e.icon
            return (
            <div key={index} 
            onClick={()=>{clickHandler(index)}}
            className={`flex flex-row items-center h-8 w-full text-[15px] font-semibold cursor-pointer rounded-[5px] ${ Selected == index && "bg-[rgb(255,245,245)] [&>a]:text-primary [&>div]:border-primary"} hover:[&>div]:border-primary hover:[&>a]:text-primary hover:bg-[rgba(204,102,0,0.08)] backdrop-blur-xs transition-all duration-100`}>
                {Selected == index && (
                    <span className="bg-primary w-[3px] h-full"></span>
                )}
                <Icon className={`w-[15px] h-[15px] mr-1.5 text-accent ml-3 ${ Selected == index && "text-primary"}`}/>
                <a className="text-[.825em] font-[14px] text-accent">{e.name}</a>
            </div>)
        })}
    </div>
  )
}

export default Navbar