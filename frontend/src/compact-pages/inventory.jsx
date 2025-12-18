import React from 'react'
import Table from '../components/Table.jsx'
import Window from '../components/Window.jsx'

const Inventory = () => {

  const windowContent = () => (
    <div className="w-full h-full p-5 flex flex-col w-full">
      <div className="w-full h-full flex flex-col py-5 items-center">
        
        <form className="flex flex-col w-[80%]">
          <h1 className="text-3xl mb-7 text-primary">Modifier</h1>
          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Nom produit</label>
            <input className="outline outline-gray-300 rounded-sm h-8 mb-5 "></input>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-extralight text-sm">Categorie</label>
            <select className="outline outline-gray-300 rounded-sm h-8 mb-5">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <label className="font-extralight text-sm">Prix</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 "></input>
            </div>
            <div>
              <label className="font-extralight text-sm">Quantite</label>
              <input className="outline outline-gray-300 rounded-sm h-8 w-full mb-5 "></input>
            </div>
          </div>
          <div className="w-full h-13 flex flex-row items-center justify-end space-x-2 mt-5">
            <button className="rounded-md ring text-primary  h-8 w-20 ring-primary">Annuler</button>
            <button className="rounded-md bg-primary text-white  h-8 w-20">Appliquer</button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className="h-full p-5 flex flex-col">
        <Table/>
        <Window WindowContent={windowContent}/>
    </div>
  )
}

export default Inventory