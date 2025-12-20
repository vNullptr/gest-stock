import React, {useEffect, useState} from 'react'
import List from '../components/List'
import api from '../api/axios'
import Window from '../components/Window.jsx'
import AddForm from '../components/forms/addUserForm.jsx'
import EditForm from '../components/forms/editUserForm.jsx'

const Staff = () => {

  const [StaffList, setStaffList] = useState([])
  const [Adding, setAdding] = useState(false)
  const [SelectedStaff, setSelectedStaff] = useState(null)
  const Headers = [
    {label:"ID", key:"id", width:5}, 
    {label:"Nom d'utilisateur", key:"username", width:15},
    {label:"Nom", key:"last_name", width:17.5},
    {label:"Prenom", key:"first_name", width:17.5},  
    {label:"Role", key:"role", width:20, tag:true},
    {label:"Magasin", key:"shop", width:20}
  ]

  useEffect(()=>{
    const fetchStaff = async ()=>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const response = await api(token).get('/api/staff')
          setStaffList(response.data)
        } catch (err){
          console.error(err)
        }
      } else {
        navigate('/login')
      }
   
    }
    fetchStaff()
  }, [SelectedStaff, Adding])

  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <div className="flex flex-row justify-between w-full my-3">
        <button className="w-20 h-8 p-1 shadow-sm text-white bg-primary rounded-sm hover:bg-[#ff9900] hover:scale-105 transition-all transition-100" onClick={()=>{setAdding(true)}}>Ajouter</button>
      </div>
      <List Headers={Headers} Data={StaffList} editHandler={(id)=>{setSelectedStaff(id)}} />
      {  SelectedStaff != null && 
      <Window>
        <EditForm currentUserId={SelectedStaff} onClose={()=>{setSelectedStaff(null)}} />
      </Window>}
      {  Adding && 
      <Window>
        <AddForm onClose={()=>{setAdding(false)}} />
      </Window>}
    </div>
  )
}

export default Staff