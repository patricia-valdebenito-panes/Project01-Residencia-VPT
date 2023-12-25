import React, { useState, useEffect } from "react";
import { Select } from "./Select";
import useAuth from "../hooks/useAuth";
import { Alert } from "./Alert";
import useTemplate from "../hooks/useTemplate";

export const FormVisitMedical = () => {

  const [presion, setPresion] = useState("");
  const [pulse, setPulse] = useState("");
  const [temperature, setTemperature] = useState("");
  const [FR, setFR] = useState("");
  const [SAC, setSAC] = useState("");
  const [observations, setOobservations] = useState("");
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
      presion:presion,
      pulse:PULSE,
      temperature:temperature,
      FR:FR,
      SAC:SAC,
      Obs: observations,
    };

    submitTemplate(newRegister, "signos-vitales");
  };
  // const { msg } = alert;
  // console.log("msg :", msg);
  return (
    <>
      PASO 2:
      {/* {msg && <Alert alert={alert} />} */}

      <form
        className="bg-white py-10 px-5 md:2:1/2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label htmlFor="name" className="text-zinc-950 mb-1 font-medium">
            Presión:
          </label>
          <input
            id="presion"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="presion"
            value={presion}
            required
            placeholder="Ingresar Nombre"
            onChange={(e) => setPresion(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="pulse"
            className="text-zinc-950 mb-1 font-medium"
          >
            Pulso:
          </label>
          <input
            id="type"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="pulse"
            value={pulse}
            required
            placeholder="Ingresar tipo"
            onChange={(e) => setPulse(e.target.value)}
          />
        </div>

        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="temperature"
            className="text-zinc-950 mb-1 font-medium"
          >
            Temperatura:
          </label>
          <input
            id="type"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="temperature"
            value={temperature}
            required
            placeholder="Ingresar tipo"
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="FR"
            className="text-zinc-950 mb-1 font-medium"
          >
            Frecuencia Cardiaca:
          </label>
          <input
            id="type"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="FR"
            value={FR}
            required
            placeholder="Ingresar tipo"
            onChange={(e) => setFR(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-auto max-w-xs mt-5">
          <label
            htmlFor="SAC"
            className="text-zinc-950 mb-1 font-medium"
          >
            Saturación respiratoria:
          </label>
          <input
            id="type"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border border-grey-300"
            name="SAC"
            value={SAC}
            required
            placeholder="Ingresar tipo"
            onChange={(e) => setSAC(e.target.value)}
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
