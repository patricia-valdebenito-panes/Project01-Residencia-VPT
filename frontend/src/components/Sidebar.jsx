import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const name = "Karine";
  return (
    <aside className="md:w-80 lg:w-96 px-5">
      <p className="text-xl font-bold mb-8 mt-5">Hola {name}</p>

      <Link
        to="/templates/nuevo-template"
        className="w-full bg-sky-600 hover:font-semibold text-center text-white uppercase rounded-lg mt-2 p-3 block"
      >
        Nueva Planilla
      </Link>

      <Link
        to="/residentes/nuevo-residente"
        className="w-full bg-sky-600 hover:font-semibold text-center text-white uppercase rounded-lg mt-2 p-3 block"
      >
        Nuevo Residente
      </Link>
    </aside>
  );
};
