import React, { useEffect } from "react";
import useTemplate from "../hooks/useTemplate";
import formatDateAndTime from "../config/FormatDateAndHr.js";
import { ItemClientTable } from "../components/ItemClientTable.jsx";
import { Link } from "react-router-dom";

export const Templates = () => {
  const { templates } = useTemplate();
  console.log("use templates: ", templates);
  let date;

  return (
    <>

      <div className="text-3xl font-bold mb-4">Templates</div>
      {templates.length ? (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 ">
            <tr className="cursor-pointer">
              <th className="p-2 text-start">Type</th>
              <th className="p-2 text-start">Residente</th>
              <th className="p-2 text-start">Fecha de Creación</th>
              <th className="p-2 text-start">Hora de Creación</th>
              <th className="p-2 text-start">Detalle</th>
            </tr>
          </thead>
          <tbody>
            {templates?.map((template) => {
              const { createdAt, _id, type, updatedAt } = template;
              date = createdAt === updatedAt ? createdAt : updatedAt;
              const { dayDate, dayHour } = formatDateAndTime(date);

              return (
                <tr key={template._id} className="border-b border-gray-300">
                  <td className="p-2 text-start">{type}</td>
                  {template?.client && (
                    <ItemClientTable identify={template.client} />
                  )}
                  <td className="p-2 text-start">{dayDate}</td>
                  <td className="p-2 text-start">{dayHour.split(",")[0]}</td>
                  <td className="p-2 text-start cursor-pointer hover:underline">
                    <Link 
                    className="text-gray-400 font-semibold"
                    to={`${_id}`}
                    >Ver Detalle</Link> 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text text-center text-gray-600">Aún no hay registros</p>
      )}
    </>
  );
};
