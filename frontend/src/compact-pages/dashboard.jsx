import React from 'react'

const Dashboard = () => {

  const tableHead = ["head1","head2","head3","head4"]
  /* dashboard will just have amounts of each stuff and a welcome text*/ 
  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-bold text-2xl text-accent">Tableau de bord</h1>
      <div className="flex flex-row gap-5">
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100 flex flex-col justify-between p-5">
          <span className="text-md  text-accent opacity-50 uppercase">Produits en stock</span>
          <span class="text-6xl font-bold">3256</span>
          <span class="text-xs text-gray-400">Total des produits actuellement present en stock</span>
        </div>
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100 flex flex-col justify-between p-5">
          <span className="text-md  text-accent opacity-50 uppercase">Commandes en cours</span>
          <span class="text-6xl font-bold">25</span>
          <span class="text-xs text-gray-400">Total des commandes en cours de traitement</span>
        </div>
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100 flex flex-col justify-between p-5">
          <span className="text-md  text-accent opacity-50 uppercase">Nombre de magasins actif</span>
          <span class="text-6xl font-bold">12</span>
          <span class="text-xs text-gray-400">Total des magasins ouvert au publique</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard