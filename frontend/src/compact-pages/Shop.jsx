import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import StockTable from '../components/StockTable'
import EmployeeList from '../components/EmployeeList'
import { useNavigate } from 'react-router-dom'

const Shop = () => {

    const navigate = useNavigate()

    const [Shops, setShops] = useState([])
    const [SelectedShop, setSelectedShop] = useState(1)
    const [Adding, setAdding] = useState(false)
    const [newShop, setnewShop] = useState({})

    useEffect(()=>{
        const fetchData = async () =>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                const shopResponse = await api(token).get(`/api/shop/`)
                setShops(shopResponse.data)
                setSelectedShop(shopResponse.data[0]?.id)
                
            }catch (err){
                console.error(err)
                setAdding(false)
            }
        } else {
            console.error("no session token")
            setAdding(false)
            navigate('/login')
        }
        }

        fetchData()
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                const shopResponse = await api(token).post(`/api/shop/`, newShop)
                setShops(prev=>([newShop, ...prev]))
                setAdding(false)
                setnewShop({})
            }catch (err){
                console.error(err)
                setAdding(false)
            }
        } else {
            console.error("no session token")
            setAdding(false)
            navigate('/login')
        }
        

    }

  return (
    <div className="w-full h-full flex flex-col p-5">
        <div className="flex flex-col bg-white rounded-sm shadow-sm w-full p-2">
            <div className="flex flex-row justify-between w-full items-center ">
                {Adding ?
                <form className="flex flex-row justify-start space-x-3" onSubmit={handleSubmit}>
                    <input name="name" className="outline outline-gray-300 rounded-sm h-8 w-full p-2" value={newShop?.name} onChange={(e)=>{setnewShop(prev => ({...prev, name: e.target.value}))}} placeholder="Nom"></input>
                    <input name="adresse" className="outline outline-gray-300 rounded-sm h-8 w-full p-2" value={newShop?.address} onChange={(e)=>{setnewShop(prev => ({...prev, address: e.target.value}))}} placeholder="Adresse"></input>
                    <button type="submit" className="h-8 p-1 text-white bg-primary rounded-sm hover:bg-[#ff9900] hover:scale-105 transition-all transition-100">Enregistrer</button>
                </form>
                :
                <div className="text-xl font-extrabold">
                    Magasins
                </div> 
                }
                <button className="h-8 p-1 text-white bg-primary rounded-sm hover:bg-[#ff9900] hover:scale-105 transition-all transition-100" onClick={()=>{setAdding(!Adding)}}>{Adding ? "Annuler" : "Ajouter"}</button>
            </div>
 
            <div className="grid grid-cols-3 gap-2 mt-2">
                {Shops.map((shop)=>{
                    return (
                    <div className={`cursor-pointer select-none outline-2 ${SelectedShop == shop?.id ? "outline-primary" : "outline-gray-200"} rounded-sm p-2 transition-all duration-300`} onClick={()=>{setSelectedShop(shop?.id)}}>
                        <h1 className="text-md font-bold">{shop?.name}</h1>
                        <p className="text-sm font-medium text-gray-600">{shop?.address}</p>
                    </div>)
                })}

                {Shops.length > 0 || <div className="w-full text-center col-span-3"> Chargement ... </div>}
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 h-full">
            <div className="bg-white rounded-sm shadow-sm col-span-1 h-full flex flex-col p-2">
                <h1 className="text-3xl font-bold">Stock</h1>
                <div className="mt-2 overflow-y-scroll">
                    <StockTable SelectedShop={SelectedShop}/>
                </div>
            </div>
            <div className="bg-white rounded-sm shadow-sm col-span-1 h-full flex flex-col p-2">
                <h1 className="text-3xl font-bold">Employé(e)s</h1>
                <EmployeeList SelectedShop={SelectedShop}/>
            </div>
        </div>
    </div>
  )
}

export default Shop