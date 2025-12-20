import React from 'react'
import List from '../components/List'

const Staff = () => {
  const Headers = [
    {label:"ID", key:"id", width:15}, 
    {label:"Nom", key:"lastname", width:25},
    {label:"Prenom", key:"name", width:25},  
    {label:"Role", key:"role", width:20, tag:true},
    {label:"Magasin", key:"shop", width:20}
  ]
  const placeHolder = [
    {id:"1", lastname:"Haddi", name:"Rayan", role:"Senior DS", shop:"1"},
    {id:"2", lastname:"Last Name #1", name:"Name #1", role:"Junior DS", shop:"1"},
    {id:"3", lastname:"Last Name #2", name:"Name #2", role:"Junior DS", shop:"1"},
  ]

  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <List Headers={Headers} Data={placeHolder}/>
    </div>
  )
}

export default Staff