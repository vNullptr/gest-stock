import React, {useState, useEffect} from 'react'
import OrderForm from '../components/forms/orderForm'
import OrderCard from '../components/OrderCard'
import api from '../api/axios'

const Supplier = () => {

    const [Orders, SetOrders] = useState([])

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
            </div>
        </div>
    </div>
  )
}

export default Supplier