import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useTemplate from '../hooks/useTemplate';
export const Template = () => {
   const params = useParams();
   const { getTemplate } = useTemplate();
  
   useEffect(() => {
    getTemplate(params.id);
   }, [])
   
  return (
    <div>Template</div>
  )
}
