import React, {useEffect, useState} from 'react'

const OrderCard = ({Data}) => {
  const status = Data?.status ?? 0

  return (
    <>
        <div className="bg-gray-100 h-40 rounded-sm grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <div className="col-span-1 border-r border-gray-300 p-1">
                <div>
                    <h1 className="font-bold text-[1.2em]">Commande ID : {Data?.id}</h1>
                </div>
                <div className="flex flex-row justify-between">
                    <h2 className="text-[0.8em] text-gray-500">{Data?.dealer?.name} (ID : {Data?.dealer?.id})</h2>
                    <h2 className="text-[0.8em] text-gray-500">{Data?.dealer?.contact}</h2>
                </div>
            </div>
            <div className="col-span-1 border-l border-gray-300 p-1">
                <div className="flex flex-row justify-between items-center space-x-1">
                    <h1 className="font-bold text-[1.2em] text-end">{Data?.date_arrival}</h1>
                    <h1 className="font-bold text-[1.2em] text-end">{Data?.date_arrival}</h1>
                </div>
                <div className="flex flex-row justify-between space-y-2">
                    <h2 className="text-[0.8em] text-gray-500">{Data?.product?.name} (ID : {Data?.product?.id})</h2>
                    <h2 className="text-[0.8em] text-gray-500">x{Data?.quantity}({Data?.product?.quantity})</h2>
                </div>
            </div>
            <div className="col-span-2 bg-gray-200 rounded-sm">
                <div className="p-2">
                    
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-col items-center">
                            <div className={`rounded-full h-10 w-10 flex items-center justify-center  ${status == 0 ? 'ring-3 ring-primary' : ''} ${status > 0 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>
                                <span className="font-bold">1</span>
                            </div>
                            <div className="text-xs mt-1">En Attente</div>
                        </div>

                        <div className={`flex-1 h-1 mb-5 rounded ${status > 0 ? 'bg-primary' : 'bg-gray-300'}`}></div>

                        <div className="flex flex-col items-center">
                            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${status == 1 ? 'ring-3 ring-primary' : ''} ${status > 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>
                                <span className="font-bold">2</span>
                            </div>
                            <div className="text-xs mt-1">En Cours</div>
                        </div>

                        <div className={`flex-1 h-1 mb-5 rounded ${status > 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>

                        <div className="flex flex-col items-center">
                            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${status >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>
                                <span className="font-bold">3</span>
                            </div>
                            <div className="text-xs mt-1">Arrivé</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderCard