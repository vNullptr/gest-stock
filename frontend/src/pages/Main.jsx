import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Dashboard from '../compact-pages/dashboard'
import Inventory from '../compact-pages/inventory'
import {homeIcon, inventoryIcon, shopIcon, userIcon, supplierIcon} from '../assets/icons/index'

const Main = () => {

  const [currentPage, setcurrentPage] = useState(0)
    const pages = [
      {name:"Tableau de bord", icon:homeIcon},
      {name:"Inventaire", icon:inventoryIcon},
      {name:"Personnels", icon:shopIcon},
      {name:"Magasins", icon:userIcon},
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
          <div className="flex-1 "></div> 
          <div className="flex-9 p-5">
            <div className="bg-tertiary rounded-[10px] w-full h-full shadow-[5px_5px_25px_5px_rgba(0,0,0,0.02)] overflow-hidden">
              <PageComponent/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main