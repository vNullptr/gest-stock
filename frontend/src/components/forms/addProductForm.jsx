import React, { useEffect, useState } from 'react'
import api from '../../api/axios'

const AddForm = ({onClose}) => {

  const [Product, setProduct] = useState({})
  const [Categories, setCategories] = useState([])

  useEffect(()=>{

    const fetchCategories = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          const catResponse = await api(token).get(`/api/categories`)
          setCategories(catResponse.data)

        }catch (err){
          console.error(err)
          onClose()
        }
      } else {
        console.error("no session token")
        onClose()
      }
    }

    fetchCategories()

  },[])

  const clickHandler = ()=>{

    const postProduct = async () =>{
      const token = sessionStorage.getItem("session-token")
      if (token) {
        try {
          await api(token).post(`/api/products/`,Product)
          console.log(Product)
          onClose()
        }catch (err){
          console.error(err)
          onClose()
        }
      } else {
        console.error("no session token")
        onClose()
      }
    }

    postProduct()
  }

  return (
    <div className="w-full h-full p-5 flex flex-col">
      <div className="w-full h-full flex flex-col py-5 items-center">
        
        <form className="flex flex-col w-[80%]" onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <h1 className="text-3xl mb-7 text-primary">Ajouter</h1>
          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Nom produit</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" value={Product?.name} onChange={(e)=>{setProduct(prev => ({...prev, name:e.target.value}))}} ></input>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Catégorie</label>
            <select className="outline outline-gray-300 rounded-sm h-8 mb-5 p-2" onChange={(e)=>{setProduct(prev=>({...prev, category:Categories.find(cat => cat?.name === e.target.value)?.id }))}}>
              <option>{Categories.length > 0 && Product?.category && (Categories.find((v, i)=> v?.id == Product?.category)?.name)}</option>
              {Categories.map((cat, k)=>{
                return cat?.id != Product?.category && (<option>{cat?.name}</option>)
              })}
            </select>
          </div>

          <div className="flex flex-row justify-between space-x-3">
            <div>
              <label className="font-extralight text-sm">Prix</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" type="number" value={Product?.price} onChange={(e)=>{setProduct(prev => ({...prev, price:e.target.value}))}}></input>
            </div>
            <div>
              <label className="font-extralight text-sm">Quantité</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 p-2" type="number" value={Product?.quantity} onChange={(e)=>{setProduct(prev => ({...prev, quantity:e.target.value}))}}></input>
            </div>
          </div>
          <div className="w-full h-13 flex flex-row items-center justify-end space-x-2 mt-5">
            <button className="rounded-md ring text-primary  h-8 w-20 ring-primary hover:scale-105 transition-all duration-200" type="button" onClick={onClose}>Annuler</button>
            <button className="rounded-md bg-primary text-white  h-8 w-20 hover:bg-[#ff9900] hover:scale-105 transition-all duration-200" type="button" onClick={clickHandler}>Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddForm