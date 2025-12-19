import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../compact-pages/dashboard'
import Inventory from '../compact-pages/inventory'
import {homeIcon, inventoryIcon, shopIcon, userIcon, supplierIcon} from '../assets/icons/index'
import api from '../api/axios'
import {useNavigate} from 'react-router-dom'

const Main = () => {

  const navigate = useNavigate()

  const check = async () => {
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const response = await api(token).get('/auth/check')
        } catch (err){
          console.log("Invalid Token")
          navigate('/login')
        }
      } else {
        navigate('/login')
      }
  }

  useEffect(()=>{
    check()
  }, [])

  const [currentPage, setcurrentPage] = useState(0)
    const pages = [
      {name:"Tableau de bord", icon:homeIcon},
      {name:"Inventaire", icon:inventoryIcon},
      {name:"Personnels", icon:userIcon},
      {name:"Magasins", icon:shopIcon},
      {name:"Fournisseur", icon:supplierIcon},
    ]
    const compactPages = [
      Dashboard,
      Inventory
    ]

    const Placeholder = () => (
      <div className="p-6 text-center text-accent opacity-50">Page not implemented yet</div>
    )

    const PageComponent = compactPages[currentPage] ?? Placeholder



  return (
    <div className="flex flex-row">
      <Navbar pageList={pages} page={currentPage} changePage={setcurrentPage} />
      <div className="flex flex-col w-full h-screen">
          <div className="h-[5%]"></div> 
          <div className="h-[95%]">
            <div className="bg-tertiary rounded-mdr w-full h-full overflow-hidden">
              <PageComponent/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main