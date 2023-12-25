import React, { useEffect, useState } from 'react'
import { FormVisitMedical } from '../components/FormVisitMedical'

export const RegisterVisitMedical = () => {

  return (
    <>
    {/* Incluir Pasos */}
        <div className="flex px-4 sm:px-0">
       <div className="flex flesx-col w-full  md:w-1/2 p-6">
              {alert.msg && <Alert alert={alert} />}
              <div className="flex flex-col flex-1 justify-center mb-8 mt-2">
                <p className="text-3xl text-sky-950 font-medium mx-auto px-1">
                  NUEVO TEMPLATE
                  <span className="text-xl text-sky-800 font-medium block">Paso 2:</span>
                </p>
                <div className="w-full mt-4">
                   <FormVisitMedical />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
