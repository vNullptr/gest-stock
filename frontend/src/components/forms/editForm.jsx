import React, { useEffect, useState } from 'react'
import api from '../../api/axios'

const EditForm = ({currentProductId, onClose}) => {

  const [Product, setProduct] = useState({
    name:"",
    price:"",
    quantity:"",
    category:""
  })

  useEffect(()=>{

    const fetchProduct = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const response = await api(token).get(`/api/product/${currentProductId}`)
          setProduct(response.data)
        }catch (err){
          console.error(err)
          onClose()
        }
      } else {
        console.error("no session token")
        onClose()
      }
    }

    fetchProduct()

  },[])

  return (
    <div className="w-full h-full p-5 flex flex-col">
      <div className="w-full h-full flex flex-col py-5 items-center">
        
        <form className="flex flex-col w-[80%]" onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <h1 className="text-3xl mb-7 text-primary">Modifier</h1>
          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Nom produit</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" value={Product["name"]} onChange={(e)=>{}} ></input>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Categorie</label>
            <select className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2">
              <option>{Product["category"]}</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="flex flex-row justify-between space-x-3">
            <div>
              <label className="font-extralight text-sm">Prix</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" value={Product["price"]} onChange={(e)=>{}}></input>
            </div>
            <div>
              <label className="font-extralight text-sm">Quantite</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" value={Product["quantity"]} onChange={(e)=>{}}></input>
            </div>
          </div>
          <div className="w-full h-13 flex flex-row items-center justify-end space-x-2 mt-5">
            <button className="rounded-md ring text-primary  h-8 w-20 ring-primary hover:scale-105 transition-all duration-200" onClick={onClose}>Annuler</button>
            <button className="rounded-md bg-primary text-white  h-8 w-20 hover:scale-105 transition-all duration-200">Appliquer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditForm