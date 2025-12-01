import React, { useState } from 'react'

const Navbar = () => {
    const pages = ["Tableau de bord", "Inventaire", "Personnels", "Magasins", "Fournisseurs"]
    const [Selected, setSelected] = useState(0)

  return (
    <div className="bg-white min-h-screen min-w-[200px] shadow-[5px_5px_5px_rgba(0,0,0,0.02)]">
        <div className="border-1 border-[rgb(60,60,60)] w-[30px] h-[30px] mb-[20px] m-[5px]"></div>
        {pages.map((e, index) => {
            console.log(index)
            console.log(index === Selected)
            return (
            <div key={index} 
            className={`flex flex-row items-center h-[32px] w-full pl-1.5 text-[15px] font-semibold cursor-pointer ${ Selected == index && "bg-[rgba(204,102,0,0.1)] [&>a]:text-[rgba(204,102,0,1)] [&>div]:border-[rgba(204,102,0,1)]"} hover:[&>div]:border-[rgba(204,102,0,1)] hover:[&>a]:text-[rgba(204,102,0,1)] hover:bg-[rgba(204,102,0,0.08)] backdrop-blur-xs transition-all duration-100`}>
                <div className="w-[12px] h-[12px] mx-[5px] border border-[rgb(60,60,60)] inline-block"></div>
                <a className="text-[.825em] font-[14px] text-[rgb(60,60,60)]">{e}</a>
                {Selected == index && (
                    <span className="bg-[rgba(204,102,0,1)] w-[3px] h-full ml-auto"></span>
                )}
            </div>)
        })}
    </div>
  )
}

export default Navbar