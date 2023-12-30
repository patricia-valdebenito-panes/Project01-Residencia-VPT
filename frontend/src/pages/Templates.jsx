import React, { useEffect, useState } from "react";
import useTemplate from "../hooks/useTemplate";
import formatDateAndTime from "../config/FormatDateAndHr.js";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAuth from "../hooks/useAuth.jsx";

import { ReactTabulator } from "react-tabulator";
import "react-tabulator/lib/styles.css"; // import the styles
import "react-tabulator/lib/css/tabulator.min.css"; // import the styles
import useClient from "../hooks/useClient.jsx";

export const Templates = () => {
  const { auth } = useAuth();

  const { templates } = useTemplate();
  const { getClient, client } = useClient();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 20 : 10;

  const getType = (type) => {
    let nameType = "";
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

  // Ordena los templates por fecha de creación descendente
  const sortedTemplates = templates.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const obteniendoiden = async (ID) => {
    await getClient(ID);
  };


  const formatDateToTabulator = () => {
    let data = [];
    let initData = sortedTemplates;
    for (let i = 0; i < initData.length; i++) {
      console.log(initData[i]);
      let dcreatedAt = initData[i].createdAt;
      let dupdatedAt = initData[i].updatedAt;
      let ddate = dcreatedAt === dupdatedAt ? dcreatedAt : dupdatedAt;


      data.push({
        id: i + 1,
        type: getType(initData[i].type),
        client:initData[i].name,
        date: formatDateAndTime(ddate).dayDate_format_yyyy_mm_dd,
        hr: formatDateAndTime(ddate).dayHour,
      });
    }
    return data;
  };

  const columns = [
    { title: "Tipo", field: "type", headerFilter: "input" },
    { title: "Residente", field: "client" },
    { title: "Fecha", field: "date" },
    { title: "Hora", field: "hr" },
  ];

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const paginatedTemplates = sortedTemplates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  let date;


  return (
    <>
      <div className="text-3xl font-bold mb-4 overflow-x-auto">Templates</div>

      {templates.length ? (
        <div>
          <ReactTabulator
            data={formatDateToTabulator()}
            columns={columns}
            // layout={"fitData"}
            layout={"fitColumns"}
            pagination="local"
          />
        </div>
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
