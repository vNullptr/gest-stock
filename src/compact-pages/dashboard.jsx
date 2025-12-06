import React from 'react'

const Dashboard = () => {

  const tableHead = ["head1","head2","head3","head4"]
  /* dashboard will just have amounts of each stuff and a welcome text*/ 
  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-bold text-2xl text-accent">Tableau de bord</h1>
      <div className="flex flex-row gap-5">
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100">
          <h1 className="relative top-3 left-5 text-md  text-accent opacity-50 uppercase">Poduits en stock</h1>
        </div>
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100">
          <h1 className="relative top-3 left-5 text-md  text-accent opacity-50 uppercase">Commandes en cours</h1>
        </div>
        <div className="flex-1 my-5 h-50 bg-white rounded-xl shadow-sm border-gray-100">
          <h1 className="relative top-3 left-5 text-md  text-accent opacity-50 uppercase">Ventes</h1>
        </div>
      
      </div>
    </div>
  )
}

export default Dashboard