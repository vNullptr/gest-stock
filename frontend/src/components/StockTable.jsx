import React, {useState, useEffect} from 'react'
import api from '../api/axios'

const StockTable = ({SelectedShop}) => {
  
    const [Stock, setStock] = useState([])
    const [Products, setProducts] = useState([])
    const [Import, setImport] = useState(null)

    const fetchStock = async () =>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                const stockResponse = await api(token).get(`/api/shop/${SelectedShop}/products`)
                setStock(stockResponse.data)
                const prodResponse = await api(token).get('/api/products')
                setProducts(prodResponse.data)
            }catch (err){
                console.error(err)
            }
        } else {
            console.error("no session token")
        }
    }

    useEffect(()=>{
        fetchStock()
    },[SelectedShop])
    
    const handleIncrement = async (id)=>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                await api(token).patch(`/api/stock/${id}/`, {quantity:(Stock.find(s => s?.id === id)?.quantity ?? 0) + 1})
                await fetchStock()
            }catch (err){
                console.error(err)
            }
        } else {
            console.error("no session token")
        }
    }
    const handleDecrement = async (id)=>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                await api(token).patch(`/api/stock/${id}/`, {quantity:Math.max(0,Stock.find(s => s?.id === id)?.quantity-1)})
                await fetchStock()
            }catch (err){
                console.error(err)
            }
        } else {
            console.error("no session token")
        }
    }

    const handleImport = async (id)=>{
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                await api(token).post(`/api/stock/`, {product:id, shop: SelectedShop, quantity:0})
                setImport(null)
                await fetchStock()
            }catch (err){
                console.error(err)
            }
        } else {
            console.error("no session token")
        }
    }
  
    return (
    <>
        <table className="w-full">
            <thead className="p-2">
                <tr className="text-sm font-bold text-left text-gray-600 h-10 bg-tertiary">
                    <td className="pl-2 w-[10%] text-left">ID</td>
                    <td className="pl-2 w-[25%] text-left">Nom Produit</td>
                    <td className="pl-2 w-[20%] text-left">Quantite</td>
                    <td className="pl-2 w-[20%] text-center">Total restant</td>
                </tr>
            </thead>
            <tbody>
                {Stock.map((stock, i)=>{
                    return <tr key={stock?.id} className={`text-[0.9em] ${i % 2 ? "bg-tertiary" : "bg-white"}`} >
                        <td className="text-left pl-2">{stock?.id}</td>
                        <td className="text-left pl-2">{stock?.product?.name}</td>
                        <td className="text-center pl-2 flex justify-start items-center">
                            <div className="flex flex-row items-center justify-end space-x-2">
                                <button className="w-5 h-5 hover:scale-120 transition-all duration-100 font-bold text-primary flex items-center justify-center rounded-sm" onClick={()=>handleDecrement(stock?.id)}>-</button>
                                <span className="w-8 text-center">{stock?.quantity}</span>
                                <button className="w-5 h-5 hover:scale-120 transition-all duration-100 font-bold text-primary flex items-center justify-center rounded-sm" onClick={()=>handleIncrement(stock?.id)}>+</button>
                            </div>
                        </td>
                        <td className="text-center pl-2">{stock?.product?.quantity-stock?.total_quantity}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className="w-full mt-1 flex flex-row justify-center items-center">
            <select className="outline outline-gray-300 rounded-sm mx-2 w-30" onChange={(e)=>setImport(Products.find(p => e.target.value === p?.name)?.id)}>
                <option></option>
                {Products.map(prod => {
                    if (!Stock.find(s=>s?.product?.id === prod?.id))
                        return <option>{prod?.name}</option>
                })}
            </select>
            <button className="w-16 text-sm h-6 p-1 flex justify-center items-center shadow-sm text-white bg-primary rounded-sm hover:bg-[#ff9900] transition-all transition-100" onClick={()=>{handleImport(Import)}}>Importer</button>
        </div>
    </>
  )
}

export default StockTable