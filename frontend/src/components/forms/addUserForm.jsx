import React, { useEffect, useState } from 'react'
import api from '../../api/axios'

const AddForm = ({onClose}) => {

  const [User, setUser] = useState({})
  const [Shops, setShops] = useState([])
  const Roles = [
    {label:"Employé", id:0 },
    {label:"Responsable", id:1},
    {label:"Gérant", id:2} 
  ]

  useEffect(()=>{

    const fetchData = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const shopResponse = await api(token).get(`/api/shop/`)
          setShops(shopResponse.data)
        }catch (err){
          console.error(err)
          onClose()
        }
      } else {
        console.error("no session token")
        onClose()
      }
    }

    fetchData()

  },[])

  const clickHandler = ()=>{

    const patchUser = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          await api(token).post(`/api/staff/`,User)
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
          <h1 className="text-3xl mb-7 text-primary">Ajouter</h1>
          <div className="flex flex-row justify-between space-x-3">
            <div>
              <label className="font-extralight text-sm">Prénom</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" value={User?.first_name} onChange={(e)=>{setUser(prev => ({...prev, first_name:e.target.value}))}}></input>
            </div>
            <div>
              <label className="font-extralight text-sm">Nom</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" value={User?.last_name} onChange={(e)=>{setUser(prev => ({...prev, last_name:e.target.value}))}}></input>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Magasin</label>
            <select className="outline outline-gray-300 rounded-sm h-8 mb-5" onChange={(e)=>{setUser(prev=>({...prev, shop:Shops.find(shop => shop?.name === e.target.value)?.id }))}}>
              <option></option>
              {Shops.map((shop)=>{
                return (<option>{shop?.name}</option>)
              })}
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Role</label>
            <select className="outline outline-gray-300 rounded-sm h-8 mb-5" onChange={(e)=>{setUser(prev=>({...prev, role:Roles.find(role => role?.label === e.target.value)?.id }))}}>
              <option></option>
              {Roles.map((role)=>{
                return (<option>{role?.label}</option>)
              })}
            </select>
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
            <button className="rounded-md bg-primary text-white  h-8 w-20 hover:bg-[#ff9900] hover:scale-105 transition-all duration-200" type="button" onClick={clickHandler}>Ajouter</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddForm