import React, { useState } from 'react'
import api from '../api/axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [wrongCredit, setwrongCredit] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')
  const navigate = useNavigate()

  const login = async (username, password)=>{
    try {
      const response = await api().post('/auth/signin/',{
        "username": username,
        "password": password
      })

      sessionStorage.setItem("session-token",response.data.token)
      navigate("/main")
    } catch (err){
      if (err.response) {
        console.log("Server responded with error:", err.response.status)
        if (err.response.status === 401 || err.response.status === 422) {
          seterrorMessage("Mots de passe ou nom d'utilisateur incorrecte")
        }
      } else if (err.request) {
        console.log("No response received")
        seterrorMessage("Probleme lier au serveur reessayer ulterieurement")
      } else {
        console.log("Error setting up request:", err.message)
        seterrorMessage("Probleme lier au serveur reessayer ulterieurement")
      }
    } finally {
      setUsername("")
      setPassword("")
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen overflow-hidden bg-tertiary'>
        <div className="flex flex-col items-center bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09)] rounded-[5px] min-w-[400px] py-[30px] *:w-[80%]">
            <h1 className="text-4xl text-primary text-center font-extrabold mb-2.5 drop-shadow-sm">STOCK MANAGER</h1>
            <form className="flex flex-col space-y-3"
            onSubmit={(e)=>{
              e.preventDefault()
              login(username, password)
            }}
            >
              <input className="border border-gray-300 outline-0 rounded-[3px] p-[3px] focus:border-primary " onChange={(e)=>{ setUsername(e.target.value); setwrongCredit(false) }} value={username} type="text" placeholder="Nom d'utilisateur"></input>
              <input className="border border-gray-300 outline-0 rounded-[3px] p-[3px] focus:border-primary " onChange={(e)=>{ setPassword(e.target.value); setwrongCredit(false) }} value={password} type="password" placeholder='Mots de passe'></input>
              {(errorMessage.length > 0) && <p className='font-extralight text-[.8em] text-red-500'>{errorMessage}</p>}
              <button className="p-[7px] bg-primary rounded-[5px] text-white font-semibold text-md shadow-md hover:bg-[#ff9900] transition-all duration-200" type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login