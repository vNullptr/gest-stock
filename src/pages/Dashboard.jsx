import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {homeIcon, inventoryIcon, shopIcon, userIcon, supplierIcon} from '../assets/icons/index'

const Dashboard = () => {

  const [currentPage, setcurrentPage] = useState(0)
    const pages = [
    {name:"Tableau de bord", icon:homeIcon},
    {name:"Inventaire", icon:inventoryIcon},
    {name:"Personnels", icon:shopIcon},
    {name:"Magasins", icon:userIcon},
    {name:"Fournisseur", icon:supplierIcon},
    ]


  return (
    <div className="flex flex-row">
      <homeIcon/>
      <Navbar pageList={pages} page={currentPage} changePage={setcurrentPage} />
    </div>
  )
}

export default Dashboard