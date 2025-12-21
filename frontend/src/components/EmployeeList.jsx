import React, {useState, useEffect} from 'react'
import api from '../api/axios'
import Staff from '../compact-pages/Staff'
import { useNavigate } from 'react-router-dom'

const EmployeeList = ({SelectedShop}) => {

    const navigate = useNavigate()
    const [StaffList, setStaffList] = useState([])

    useEffect(()=>{
    const fetchStaff = async ()=>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const response = await api(token).get(`/api/shop/${SelectedShop}/staff`)
          setStaffList(response.data)
        } catch (err){
          console.error(err)
        }
      } else {
        navigate('/login')
      }
   
    }
    fetchStaff()
  }, [SelectedShop])

  return (
    <>
        <div className="flex flex-col space-y-2 w-full p-1">
            <div className="h-8 w-full rounded-sm flex flex-row items-center justify-between font-bold text-gray-600">
                    <div className="max-w-8 w-8 text-center ml-2">ID</div>
                    <div className="max-w-8 w-8 text-left">Prenom</div>
                    <div className="max-w-8 w-8 text-left">Nom</div>
                    <div className="text-left w-[50%]"></div>
                </div>
            {StaffList.map(Staff => {
                return <div className="h-8 w-full outline outline-gray-200 rounded-sm flex flex-row items-center justify-between">
                    <div className="max-w-8 w-8 text-center ml-2">{Staff?.id}</div>
                    <div className="max-w-8 w-8 text-left">{Staff?.first_name}</div>
                    <div className="max-w-8 w-8 text-left">{Staff?.last_name}</div>
                    <div className="text-left w-[50%] flex justify-end p-3">
                        {
                            Staff?.role >= 1 ? <span className="w-3 h-3 rounded-full bg-primary"></span> : ""
                        }
                    </div>
                </div>
            })}
        </div>
        {StaffList.length > 0 || <div className="w-full text-center"> Chargement ... </div>}
    </>
  )
}

export default EmployeeList