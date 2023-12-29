import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useClient from "../hooks/useClient";
import useAuth from "../hooks/useAuth";

export const Resident = () => {
  const params = useParams();
  const { client, getClient } = useClient();
  
  const { auth } = useAuth();
  const { rol }= auth;
  console.log("rol",rol)
  const [moreInfoTutor, setMoreInfoTutor] = useState(false);
  // const [editPerfil, setEditPerfil] = useState(false);
  const navigate = useNavigate();

  const handleInformationTutor = (e) => {
    e.preventDefault();
    setMoreInfoTutor(!moreInfoTutor)
  };
  
  const handleEditInformation = (e) => {
    e.preventDefault();

    navigate(`/residentes/editar-residente/${client._id}`)
  };

  useEffect(() => {
    const dataTC = async () => {
      getClient(params.id)
      console.log(client)
    };

    dataTC();
  }, []);

  return (
    <>

      {client ? (
        <div className="relative max-w-dm w-full lg:max-w-4xl lg:flex border-r border-b border-l  border-r border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-r">
           <span className="absolute top-1 right-4" onClick={handleEditInformation}>Editar</span>
          <div className="h-24  lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: "url('https://media.istockphoto.com/id/1390616702/es/vector/avatar-de-hombre-mayor-anciano-sonriente-con-barba-y-cabello-gris-ilustraci%C3%B3n-de-personajes.jpg?s=612x612&w=0&k=20&c=zxf9s-s5QcqbfYFXxyjYVgjse0qNHWgWHZZrLUWun0k=')" }} title="Woman holding a mug">
          </div>

          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-2xl text-gray-600 flex items-center capitalize">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                {client.name}
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2 capitalize">{`${client.lastnamemother} ${client.lastnamefather}`}</div>
              <p className="text-gray-700 text-base">           
              <span className="font-bold">
                RUT:</span> {client.rut}
              </p>
              <span className="font-bold">
                Dependency Nivel:</span> {client.dependencyNivel}
            </div>
            <div className="flex items-center">
              {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /> */}
              <div className="text-sm">
                <p className="text-gray-900 leading-none"><span className="font-bold">Address:</span> {client.address}, {client.country}</p>
                {/* <p className="text-gray-600">Aug 18</p> */}
                <button
                  className="mt-5 mb-5 text-md text-gray-800 underline"
                  onClick={handleInformationTutor}>Ver informacion de Tutor</button>
                {moreInfoTutor && <div>
                  <hr className="border-t-1 border-sky-200  my-2" />
                  <p className="mt-3 text-gray-700 text-base">           
                  <span className="font-bold">
                    Nombre Tutor:</span> {client.name} {client.lastnamefather} {client.lastnamemother}
                   </p>
                  <p className="text-gray-700 text-base">           
                  <span className="font-bold">
                    Teléfono:</span> {client.phone}
                  </p>
                  <p className="text-gray-700 text-base">           
                  <span className="font-bold">
                    Dirección:</span> {client.rut}
                  </p>
                  <p className="text-gray-700 text-base">           
                  <span className="font-bold">
                    RUT:</span> {client.address}
                  </p>
                  
                </div>}
              </div>
            </div>
            
          </div>
        </div>

      ) : (
        <p className="text text-center text-gray-600">cargando...</p>
      )}
    </>
  );
};
