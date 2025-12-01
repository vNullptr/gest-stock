import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-hidden '>
        <div className="flex flex-col items-center shadow-[5px_5px_15px_rgba(0,0,0,0.09)] rounded-[5px] min-w-[400px] space-y-[10px] py-[30px] [&>*]:w-[80%]">
            <h1 className="text-4xl text-[#b86e00] text-center font-extrabold mb-[10px] drop-shadow-sm">STOCK MANAGER</h1>
            <input className="border-1 border-gray-300 outline-0 rounded-[3px] p-[3px] focus:border-amber-600 " placeholder='id'></input>
            <input className="border-1 border-gray-300 outline-0 rounded-[3px] p-[3px] focus:border-amber-600" placeholder='password'></input>
            <button className="p-[7px] bg-[#b86e00] rounded-[5px] text-white font-semibold text-md shadow-md hover:bg-[#ff9900] transition-all duration-200">Login</button>
            <h2 className="text-[10px] text-gray-500 text-center -mb-3 font-extralight">Secure access portal</h2>
        </div>
    </div>
  )
}

export default Login