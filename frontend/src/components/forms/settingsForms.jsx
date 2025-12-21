import React, { useEffect, useState } from 'react'
import api from '../../api/axios'

const SettingsForm = ({currentUserId, userData, onClose}) => {

  const [User, setUser] = useState(userData)
  const Roles = [
    {label:"Employé", id:0 },
    {label:"Responsable", id:1},
    {label:"Gérant", id:2} 
  ]

  const clickHandler = ()=>{

    const patchUser = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          await api(token).patch(`/api/staff/${currentUserId}/`,User)
          onClose()
        }catch (err){
          console.error(err)
          onClose()
        }
      } else {
        console.error("no session token")
        onClose()
      }
    }

    patchUser()
  }

  return (
    <div className="w-full h-full p-5 flex flex-col">
      <div className="w-full h-full flex flex-col py-5 items-center">
        
        <form className="flex flex-col w-[80%]" onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <h1 className="text-3xl mb-7 text-primary">Profile</h1>
          
          <div className="w-full flex flex-col mb-5 space-y-2">
            <label className="font-extralight text-md">Nom : {User?.first_name}</label>
            <label className="font-extralight text-md">Prenom : {User?.last_name}</label>
            <label className="font-extralight text-md">Role : {User?.role}</label>
            <label className="font-extralight text-md">Magasin : {User?.shop}</label>
          </div>
          
          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Nom d'utilisateur</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" value={User?.username} onChange={(e)=>{setUser(prev => ({...prev, username:e.target.value}))}} ></input>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Email</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" value={User?.email} onChange={(e)=>{setUser(prev => ({...prev, email:e.target.value}))}} ></input>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Mots de passe ( modification seulement )</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" type="text" onChange={(e)=>{setUser(prev => ({...prev, password:e.target.value}))}}></input>
          </div>
          

          <div className="w-full h-13 flex flex-row items-center justify-end space-x-2 mt-5">
            <button className="rounded-md ring text-primary  h-8 w-20 ring-primary hover:scale-105 transition-all duration-200" type="button" onClick={onClose}>Annuler</button>
            <button className="rounded-md bg-primary text-white  h-8 px-2 hover:bg-[#ff9900] hover:scale-105 transition-all duration-200" type="button" onClick={clickHandler}>Sauvegarder</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SettingsForm