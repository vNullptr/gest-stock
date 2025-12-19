import React, {useEffect, useState} from 'react'
import Table from '../components/Table.jsx'
import Window from '../components/Window.jsx'
import api from '../api/axios.js'
import EditForm from '../components/forms/editForm.jsx'

const Inventory = () => {

  const [selectedProduct, setselectedProduct] = useState(null)  
  const [Products, setProducts] = useState([])
  const productHeader = [
    {label:"ID", key:"id", width:10}, 
    {label:"Nom produit", key:"name" , width:40}, 
    {label:"Catégorie", key:"category" , width:20}, 
    {label:"Prix", key:"price" , width:15}, 
    {label:"Quantité", key:"quantity" , width:15}
  ]

  const editHandler = (id)=>{
    setselectedProduct(id)
  }

  useEffect(()=>{
    const fetchProducts = async ()=>{
    const token = sessionStorage.getItem("session-token")
    if (token) {
      try {
        const response = await api(token).get('/api/product')
        response.data.map((v, _)=>{
          Object.values(v).map((v,_)=>{
            if (v === null){
              return ""
            }
          })
        })
        setProducts(response.data)
      } catch (err){
        console.error(err)
      }
    } else {
      navigate('/login')
    }
      
    }

    fetchProducts()
  },[])


  return (
    <div className="h-full p-5 flex flex-col">
      <div className="flex flex-row my-3 justify-between">
        <button className="w-20 h-8 p-1my-3 text-white bg-primary rounded-sm hover:bg-[#ff9900] hover:scale-105 transition-all transition-100">Ajouter</button>
        <input className="w-60 h-8 p-1 outline outline-gray-200 bg-white rounded-sm" placeholder='Recherche'></input>
      </div>
      <Table Headers={productHeader} Data={Products} editHandler={editHandler}/>
      {  selectedProduct != null && 
      <Window>
        <EditForm currentProductId={selectedProduct} onClose={()=>{setselectedProduct(null)}} />
      </Window>}
    </div>
  )
}

export default Inventory