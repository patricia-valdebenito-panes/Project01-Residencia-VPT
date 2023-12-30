import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useTemplate from "../hooks/useTemplate";
import useClient from "../hooks/useClient";
import formatearFecha from ".././config/FormatDateAndHr.js";

export const Template = () => {
  const params = useParams();
  const { template, templateTC, getTemplate, getTemplateTC } = useTemplate();
  const { client, getClient } = useClient();
  

  useEffect(() => {
    const getData = async () => {
      await getTemplate(params.id);
    };
    getData();
  }, []);

  useEffect(() => {
    const getDataTC = async () => {
      await getTemplateTC(params.id, template.type);
    };

    getDataTC();

    getClient(templateTC.client);
    console.log("client : ",client);
    // getClient(templateTC.client);
    // console.log();
  }, [template]);

  return (
    <>
      {/* <pre>{JSON.stringify(template,null,5)}</pre>*/}
      {/* <pre>{JSON.stringify(client,null,5)}</pre>
      <br></br> 
      <br></br> */}
      {/* <pre>{JSON.stringify(templateTC, null, 5)}</pre> */}
      <div className="text-3xl font-bold mb-4">Template:</div>

      {template ? (
        <table className="border border-gray-300 w-full min-w-80 max-w-[700px]">
          <thead className="bg-gray-200 ">
            <tr className="cursor-pointer">
              <th className="p-2 text-start">Datos</th>
              <th className="p-2 text-start">Medidas</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={template._id}
              className="border-b border-gray-300 min-h-10"
            >
              <td className="mb-3 py-2 px-1">
                <strong>Cliente:</strong>
                <br></br>
                <small>rut:{` ${client.rut}  `}</small> 
              </td>
              <td className="mb-3 py-2 px-1">
                {` ${client.name} ${client.lastnamefather} ${client.lastnamemother}  `}
      
             
                </td>
            </tr>
            <tr key={"18"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Presión :</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.presion?.$numberDecimal}</td>
            </tr>

            <tr key={"27"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Pulso :</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.FR?.$numberDecimal}</td>
            </tr>
            <tr key={"26"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Temperatura (ºC):</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.temperature?.$numberDecimal}</td>
            </tr>

            <tr key={"25"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Frecuencia Respiratoria :</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.FR?.$numberDecimal}</td>
            </tr>
            <tr key={"24"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Saturación :</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.SAC?.$numberDecimal}</td>
            </tr>
            <tr key={"23"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Observaciones:</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.Obs}</td>
            </tr>
            {/* <tr key={"22"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Creador :</strong>
              </td>
              <td className="mb-2 py-2 px-1">{templateTC.creator}</td>
            </tr> */}
            <tr key={"11"} className="border-b border-gray-300 min-h-10">
              <td className="mb-2 py-2 px-1">
                <strong>Fecha de creación :</strong>{" "}
                {/* <small>{formatearFecha(createdAt)}</small> */}
              </td>

              <td className="mb-2 py-2 px-1">
                <strong>Fecha de actualización :</strong>
                {/* <small>{formatearFecha(updatedAt)}</small> */}
              </td>
            </tr>
          </tbody>
        </table>

      ) : (
        <p className="text text-center text-gray-600">cargando...</p>
      )}
                  <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
    </>
  );
};
