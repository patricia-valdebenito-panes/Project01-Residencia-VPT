import React, { useState, useEffect } from "react";
import { Select } from "./Select";
import useAuth from "../hooks/useAuth";
import { Alert } from "./Alert";
import useTemplate from "../hooks/useTemplate";

export const FormVaccines = () => {
  const [name, setName] = useState("");
  const [typeVaccines, setTypeVaccines] = useState("");
  const [observations, setOobservations] = useState("");
  const [cureNext, setCureNext] = useState("");
  const { template, getTemplate, submitTemplate } = useTemplate();
  const { _id, creator, client } = template;

  useEffect(() => {
    const value = localStorage.getItem("new-template").split(",")[1];
    const getValue = async () => {
      await getTemplate(value);
      try {
        console.log("si pasa");
      } catch (error) {
        console.log(error);
      }
    };
    getValue();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRegister = {
      client: client,
      template: _id,
      creator: creator,
      name: name,
      clasificationVaccine: typeVaccines,
      applyNext: cureNext,
      Obs: observations,
    };

    submitTemplate(newRegister, "vacunas");
  };
  // const { msg } = alert;
  // console.log("msg :", msg);
  return (
    <>
      PASO 2:
      {/* {msg && <Alert alert={alert} />} */}
      {/* {template ? (
        <p>{JSON.stringify(template)}</p>
      ) : (
        <p>actualizando template</p>
      )} */}
      <form
        className="bg-white py-10 px-5 md:2:1/2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label htmlFor="name" className="text-zinc-950 mb-1 font-medium">
            Nombre de la Vacuna:
          </label>
          <input
            id="name"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="name"
            value={name}
            required
            placeholder="Ingresar Nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="typeVaccines"
            className="text-zinc-950 mb-1 font-medium"
          >
            Tipo de vacuna:
          </label>
          <input
            id="type"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="typeVaccines"
            value={typeVaccines}
            required
            placeholder="Ingresar tipo"
            onChange={(e) => setTypeVaccines(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label htmlFor="cureNext" className="text-zinc-950 mb-1 font-medium">
            Próxima Cura:
          </label>
          <input
            id="cureNext"
            type="date"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="cureNext"
            value={cureNext}
            onChange={(e) => setCureNext(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="observations"
            className="text-zinc-950 mb-1 font-medium"
          >
            OBSERVACIONES:
          </label>
          <input
            id="observations"
            type="text"
            className="flex-grow min-h-80 px-2 rounded border border-grey-300"
            name="observations"
            value={observations}
            required
            placeholder="Ingresar Observaciones"
            onChange={(e) => setOobservations(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-xs mt-8 mx-auto mb-5">
          <button
            type="submit"
            className="w-full bg-sky-700 border cursor-pointer rounded-lg hover:bg-sky-800 text-sky-50 text-sm font-semibold py-3 px-4 transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};
