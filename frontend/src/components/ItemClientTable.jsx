import React, { useEffect } from 'react'
import useClient from '../hooks/useClient';

export const ItemClientTable = ({identify}) => {
console.log("ItemTable : ",identify);
const { getClient, client } = useClient();

useEffect(() => {
    const obteniendoiden = async (ID)=>{
        await getClient(ID);
    }
   const datos = obteniendoiden(identify);
   console.log("da: ",datos);
}, [])

  return (
    <td className="p-2 text-start">{client?.name}</td>
  )
}
