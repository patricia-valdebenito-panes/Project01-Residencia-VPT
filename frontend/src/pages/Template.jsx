import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useTemplate from "../hooks/useTemplate";
import useClient from "../hooks/useClient";

export const Template = () => {
  const params = useParams();
  const { getTemplateCT, templateTC } = useTemplate();
  const { client, getClient } = useClient();
  const { PC, Obs, createdAt } = templateTC;

  useEffect(() => {
    const dataTC = async () => {
      await getTemplateCT(params.id);
      await getClient(templateTC.client, templateTC.type);
    };
    dataTC();
  }, []);

  return (
    <>
      <div className="text-3xl font-bold mb-4">Template:</div>
      {templateTC ? (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 ">
            <tr className="cursor-pointer">
              <th className="p-2 text-start">Residente</th>
              <th className="p-2 text-start">Horario</th>
              <th className="p-2 text-start">Observacion</th>
              <th className="p-2 text-start">Fecha</th>
              <th className="p-2 text-start">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr key={templateTC._id} className="border-b border-gray-300">
              <td className="p-2 text-start">{client.name}</td>
              <td className="p-2 text-start">{PC}</td>
              <td className="p-2 text-start">{Obs}</td>
              <td className="p-2 text-start">{createdAt}</td>
              <td className="p-2 text-start cursor-pointer hover:underline">
                <Link className="text-gray-400 font-semibold" to={`/templates`}>
                  Editar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text text-center text-gray-600">cargando...</p>
      )}
    </>
  );
};
