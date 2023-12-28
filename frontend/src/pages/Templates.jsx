import React, { useEffect, useState } from "react";
import useTemplate from "../hooks/useTemplate";
import formatDateAndTime from "../config/FormatDateAndHr.js";
import { ItemClientTable } from "../components/ItemClientTable.jsx";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAuth from "../hooks/useAuth.jsx";

export const Templates = () => {
  const { auth } = useAuth();
  console.log("auth ::",auth);
  const { templates } = useTemplate();

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = window.innerWidth >= 768 ? 20 : 10;

  const getType = (type) => {
    let nameType ='';
    switch (type) {
      case "CT2":
        nameType = "Cambio de posición";
        break;
      case "CT3":
        nameType = "Curación";
        break;
      case "CT4":
        nameType = "Vacuna";
        break;
      case "CT5":
        nameType = "Visita Médica";
        break;
      case "CT6":
        nameType = "Signos Vitales";
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
    return nameType;
    
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Ordena los templates por fecha de creación descendente
  const sortedTemplates = templates.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const paginatedTemplates = sortedTemplates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  let date;

  return (
    <>
      <div className="text-3xl font-bold mb-4 overflow-x-auto">Templates</div>
      {paginatedTemplates.length ? (
        <>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200 ">
              <tr className="cursor-pointer">
                <th className="p-2 text-start">Tipo</th>
                <th className="p-2 text-start">Residente</th>
                <th className="p-2 text-start">Fecha</th>
                <th className="p-2 text-start">Hora</th>
                <th className="p-2 text-center">Detalle</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {paginatedTemplates.map((template) => {
                const { createdAt, _id, type, updatedAt } = template;
                date = createdAt === updatedAt ? createdAt : updatedAt;
                // const { dayDate, dayHour } = formatDateAndTime(date);
                const { dayDate_format_dd_mm, dayHour } = formatDateAndTime(date);
                
                return (
                  <tr key={template._id} className="border-b border-gray-300">
                    <td className="p-2 text-start text-sm md:text-base">{ getType(type)}</td>
                    {template?.client && (
                      <ItemClientTable identify={template.client} />
                    )}
                    <td className="p-2 text-start text-sm md:text-base">{dayDate_format_dd_mm}</td>
                    <td className="p-2 text-start text-sm md:text-base">{dayHour.split(",")[0]}</td>
                    <td className="p-2 text-center text-sm md:text-base cursor-pointer hover:underline">
                      <Link
                        className="text-gray-400 font-semibold"
                        to={`${_id}`}
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-start mt-4">
            <ReactPaginate
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(templates.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination flex items-center space-x-2"}
              activeClassName={"bg-sky-700 text-white px-3 py-2 rounded"}
              pageClassName={
                "hover:bg-sky-200 cursor-pointer transition-all duration-200 ease-in-out px-3 py-2 rounded"
              }
              previousClassName={
                "hover:bg-sky-200 cursor-pointer transition-all duration-200 ease-in-out px-3 py-2 rounded"
              }
              nextClassName={
                "hover:bg-sky-200 cursor-pointer transition-all duration-200 ease-in-out px-3 py-2 rounded"
              }
            />
          </div>
        </>

      ) : (
        <p className="text text-center text-gray-600">Aún no hay registros</p>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};
