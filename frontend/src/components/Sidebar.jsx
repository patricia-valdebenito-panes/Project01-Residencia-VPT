import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const name = "Karine";
  return (
    <>
      <aside className="md:w-80 ld:w-96 px-5">
        <p className="tex-xl font-bold mb-8 mt-5">Hola {name}</p>

        <Link
          to="nuevo-template"
          className="w-full  bg-sky-600 hover:font-semibold text-center text-white uppercase rounded-lg mt-5 p-3"
        >
          Nueva Planilla
        </Link>

      </aside>
    </>
  );
};
