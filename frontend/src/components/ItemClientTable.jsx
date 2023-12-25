import React, { useEffect } from 'react'
import useClient from '../hooks/useClient';

export const ItemClientTable = ({identify}) => {

const { getClient, client } = useClient();

useEffect(() => {
    const obteniendoiden = async (ID)=>{
        await getClient(ID);
    }
    obteniendoiden(identify);
}, [])

  return (
    <td className="p-2 text-start">{client?.name}</td>
  )
}
