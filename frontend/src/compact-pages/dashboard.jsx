import React, {useEffect, useState} from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const [totals, setTotals] = useState({
    shops: 0,
    products: 0,
    orders: 0,
    stockValue: 0,
  })
  const [recentOrders, setRecentOrders] = useState([])
  const [topProducts, setTopProducts] = useState([])

  const fetchTotals = async () => {
    const token = sessionStorage.getItem('session-token')
    if (!token) {
      console.error("no session token")
      navigate("/login")
      return 
    }

    try {
      const products = await api(token).get("/api/products/count")
      const shop = await api(token).get("/api/shop/count")
      const order = await api(token).get("/api/orders/count")

      setTotals({ shops: shop.data?.count, products: products.data?.count, orders: order.data?.count})
    } catch (err){
      console.error(err)
    }


  }

  const fetchRecentOrders = async () => {
    const token = sessionStorage.getItem('session-token')
    if (!token) {
      console.error("no session token")
      navigate("/login")
      return 
    }
    
    try {
      const orders = await api(token).get(`/api/orders/`)
      setRecentOrders(orders.data.slice(0, 3))
    } catch (err){
      console.error(err)
    }

  }

  const fetchTopProducts = async () => {
    const token = sessionStorage.getItem('session-token')
    if (!token) {
      console.error("no session token")
      navigate("/login")
      return 
    }
    
    try {
      const products = await api(token).get(`/api/products/`)
      setTopProducts(products.data)
    } catch (err){
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchTotals()
    fetchRecentOrders()
    fetchTopProducts()
  },[])

  return (
    <div className="p-5 flex flex-col space-y-4">
      <h1 className="font-bold text-2xl text-accent">Tableau de bord</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-sm shadow-sm p-4">
          <div className="text-sm text-gray-500">Magasins</div>
          <div className="text-2xl font-bold">{totals.shops}</div>
        </div>
        <div className="bg-white rounded-sm shadow-sm p-4">
          <div className="text-sm text-gray-500">Produits</div>
          <div className="text-2xl font-bold">{totals.products}</div>
        </div>
        <div className="bg-white rounded-sm shadow-sm p-4">
          <div className="text-sm text-gray-500">Commandes</div>
          <div className="text-2xl font-bold">{totals.orders}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-sm shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold">Commandes récentes</h2>
          </div>
          <div className="space-y-2">
            {recentOrders.map(o => (
              <div key={o.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <div className="font-medium">#{o.id} — {o.product?.name}</div>
                  <div className="text-xs text-gray-500">{o.dealer?.name} • {o.quantity} pcs</div>
                </div>
                <div className="text-sm text-gray-600">{o.date_arrival}</div>
              </div>
            ))}
            {recentOrders.length === 0 && <div className="text-sm text-gray-500">Aucune commande récente</div>}
          </div>
        </div>

        <div className="bg-white rounded-sm shadow-sm p-4 overflow-y-scroll">
          <h2 className="font-bold mb-2">Produits disponible</h2>
          <div className="space-y-2">
            {topProducts.map(p => (
              <div key={p?.id} className="flex justify-between items-center">
                <div className="text-sm">{p?.name}</div>
                <div className="text-sm text-primary">{p?.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard