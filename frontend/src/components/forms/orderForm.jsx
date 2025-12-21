import React, {useState, useEffect, useEffectEvent} from 'react'
import api from '../../api/axios'
import { useNavigate } from 'react-router-dom'

const OrderForm = () => {

    const navigate = useNavigate()

    const [Suppliers, setSuppliers] = useState([])
    const [Products, setProducts] = useState([])
    const [Shops, setShops] = useState([])
    const [OrderData, setOrderData] = useState({quantity:1})

    useEffect(()=>{
        const fetchSupplier = async ()=> {
            const token = sessionStorage.getItem("session-token")
            if (token) {
                try {
                    const suppResponse = await api(token).get("api/suppliers/")
                    setSuppliers(suppResponse.data)
                    const prodResponse = await api(token).get("api/products")
                    setProducts(prodResponse.data)
                    const shopReponse = await api(token).get("api/shop")
                    setShops(shopReponse.data)
    
                }catch (err){
                console.error(err)
                onClose()
                }
            } else {
                console.error("no session token")
                onClose()
                navigate('/login')
            }
        }

        fetchSupplier()

    }, [])

    const handleConfirm = async (e) =>{
        e.preventDefault()
        const token = sessionStorage.getItem("session-token")
        if (token) {
            try {
                const response = await api(token).post(`api/orders/`, OrderData)
            } catch (err){
            console.error(err)
            }
        } else {
            console.error("no session token")
            navigate('/login')
        }
    }


  return (
    <form className="w-full" onSubmit={handleConfirm}>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between">
          <select
            className="rounded-sm outline w-50 h-6 outline-gray-300"
            value={OrderData.dealer}
            onChange={(e) =>
              setOrderData((prev) => ({ ...prev, dealer: Number(e.target.value) }))
            }
          >
            <option value="">Fournisseur</option>
            {Suppliers.map((s) => (
              <option key={s?.id} value={s?.id}>
                {s.name}
              </option>
            ))}
          </select>

          <button
            className="rounded-md bg-primary text-white px-1 hover:bg-[#ff9900] hover:scale-105 transition-all duration-200 flex items-center"
            type="submit"
          >
            Commander
          </button>
        </div>

        <select
          className="rounded-sm outline w-50 h-6 outline-gray-300"
          value={OrderData.shop}
          onChange={(e) =>
            setOrderData((prev) => ({ ...prev, shop: Number(e.target.value) }))
          }
        >
          <option value="">Magasin</option>
          {Shops.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <div className="flex flex-row space-x-2">
          <select
            className="rounded-sm outline w-50 h-6 outline-gray-300"
            value={OrderData.product}
            onChange={(e) =>
              setOrderData((prev) => ({ ...prev, product: Number(e.target.value) }))
            }
          >
            <option value="">Produit</option>
            {Products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            className="rounded-sm outline w-20 h-6 outline-gray-300 p-1"
            type="number"
            min="1"
            placeholder="Qte"
            value={OrderData.quantity}
            onChange={(e) =>
              setOrderData((prev) => ({
                ...prev,
                quantity: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>
    </form>
  );
}

export default OrderForm