import React, {useState, useEffect} from 'react'
import {Logout, Settings} from '../assets/icons/index'
import Window from './Window'
import SettingsForm from './forms/settingsForms'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

const UserBubble = () => {

    const navigate = useNavigate()

    const [SettingsWindow, setSettingsWindow] = useState(false)
    const [User, setUser] = useState({})
    
    useEffect(()=>{

        const fetchUser = async ()=>{
            const token = sessionStorage.getItem("session-token")
            if (token) {
                try {
                    const userResponse = await api(token).get(`/auth/check`)
                    setUser(userResponse.data)
                }catch (err){
                    console.error(err)
                }
            } else {
                navigate('/login')
                console.error("no session token")
            }
        }

        fetchUser()

    }, [SettingsWindow])

    const handleLogout = async ()=>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                const response = await api(token).post(`/auth/logout/`)
                console.log(response.data)
                sessionStorage.removeItem("session-token")
                navigate('/login')
                
            }catch (err){
                console.error(err)
            }
        } else {
            navigate('/login')
            console.error("no session token")
        }   
    }

  return (
    <div className="rounded-sm flex flex-row items-center space-x-2 p-2">
        <button className="bg-tertiary rounded-md w-8 h-8 hover:scale-110 transition-all duration-200" onClick={()=>setSettingsWindow(true)}>
            <Settings className="text-accent hover:text-primary"/>
        </button>
        <button className="bg-tertiary rounded-md w-8 h-8 hover:scale-110 transition-all duration-200" onClick={handleLogout}>
            <Logout className="text-accent hover:text-primary"/>
        </button>
        {SettingsWindow &&
            <Window>
                <SettingsForm currentUserId={User?.id} userData={User} onClose={()=>setSettingsWindow(false)}/>
            </Window>
        }
    </div>
  )
}

export default UserBubble