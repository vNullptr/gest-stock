import React, {useState, useEffect} from 'react'
import OrderForm from '../components/forms/orderForm'
import OrderCard from '../components/OrderCard'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

const Supplier = () => {

    const [Orders, SetOrders] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchOrders = async ()=>{
            const token = sessionStorage.getItem("session-token")
            if (token) {
                try {
                    const response = await api(token).get(`/api/orders/`)
                    SetOrders(response.data)
                } catch (err){
                    console.error(err)
                }
            } else {
                navigate('/login')
            }
        }

        fetchOrders()
    }, [])

  return (
    <div className="p-2">
        <div className="flex flex-col space-y-2 h-full ">
            <div className="p-4 bg-white rounded-sm shadow-sm w-full">
                <OrderForm/>
            </div>
            <div className="p-3 bg-white rounded-sm shadow-sm w-full flex flex-col space-y-3 h-[700px] overflow-y-scroll">
                {Orders.map(Order=>{
                    return <OrderCard Data={Order}/>
                })}
                {Orders.length > 0 || <div className="w-full text-center col-span-3"> Chargement ... </div>}
            </div>
        </div>
    </div>
  )
}

export default Supplier