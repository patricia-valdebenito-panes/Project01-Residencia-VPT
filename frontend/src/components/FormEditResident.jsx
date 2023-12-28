import React, { useState } from "react";
import useClient from "../hooks/useClient";
import { Alert } from "./Alert";

const optionRol = [
  { value: "RESIDENT", label: "RESIDENTE" },
  // { value: "PM", label: "PM" },
];

export const FormEditResident = (datos) => {

  const [name, setName] = useState(datos.name);
  const [lastnamemother, setLastnamemother] = useState(datos.lastnamemother);
  const [lastnamefather, setLastnamefather] = useState(datos.lastnamefather);
  const [rut, setRut] = useState(datos.rut);
  const [address, setAddress] = useState(datos.address);
  const [country, setCountry] = useState(datos.country);
  const [dependencyNivel, setDependencyNivel] = useState(datos.defaultValue);
  const [rol, setRol] = useState(optionRol[0]?.label || 'RESIDENT');

  const [tutorname, setTutorName] = useState(datos.tutorname);
  const [tutorlastnamemother, setTutorLastnamemother] = useState(datos.tutorlastnamemother);
  const [tutorlastnamefather, setTutorLastnamefather] = useState(datos.tutorlastnamefather);
  const [tutorphone, setTutorPhone] = useState(datos.tutorphone);
  const [tutoraddress, setTutorAddress] = useState(datos.tutoraddress);
  const [tutorrut, setTutorRut] = useState(datos.tutorrut);

  const { alert, showAlert , editResident} = useClient();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ([name].includes("")) {
      showAlert({ msg: "Debe Seleccionar un template", error: true });
      return;
    }

    if ([lastnamemother].includes("")) {
      showAlert({ msg: "Debe Seleccionar un Residente", error: true });
      //   setInformationType({ msg: "INFORMACION/EJEMPLO", read: true });
      return;
    }

    let newResident = {
      name: name,
      lastnamemother: lastnamemother,
      lastnamefather: lastnamefather,
      rut: rut,
      address: address,
      country: country,
      dependencyNivel: dependencyNivel,
      rol: rol,
      tutor: {
        name: tutorname,
        lastnamefather: tutorlastnamemother,
        lastnamemother: tutorlastnamefather,
        phone: tutorphone,
        address: tutoraddress,
        rut: tutorrut,
      },
    };
    console.log("edit resident : ", newResident);
    // datos a provider templates
    editResident(newResident);
    showAlert({});
  };

  const { msg } = alert;

  return (
    <>
      {msg && <Alert alert={alert} />}
      <form
        className="bg-white py-3 px-2 md:px-5 md:2:1/2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-zinc-950 font-bold">Información de residente:</p>
        <hr className="border-t-2 border-sky-800  my-4" />
        <div className="flex flex-col max-w-full mt-5">
            <label htmlFor="name" className="text-zinc-950 mb-1 font-medium">
              Nombre de residente:
            </label>
            <input
              id="name"
              type="text"
              className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
              name="name"
              value={name}
              required
              placeholder="Ingresar Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        <div className="flex gap-2">
          
          <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
            <label
              htmlFor="lastnamemother"
              className="text-zinc-950 mb-1 font-medium"
            >
              Apellido materno:
            </label>
            <input
              id="lastnamemother"
              type="text"
              className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
              name="lastnamemother"
              value={lastnamemother}
              required
              placeholder="Ingresar Apellido"
              onChange={(e) => setLastnamemother(e.target.value)}
            />
          </div>

        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label
            htmlFor="nalastnamefatherme"
            className="text-zinc-950 mb-1 font-medium"
          >
            Apellido paterno:
          </label>
          <input
            id="lastnamefather"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="lastnamefather"
            value={lastnamefather}
            required
            placeholder="Ingresar Apellido"
            onChange={(e) => setLastnamefather(e.target.value)}
          />
        </div>
        </div>

        <div className="flex flex-col max-w-full mt-5">
          <label htmlFor="rut" className="text-zinc-950 mb-1 font-medium">
            Rut:
          </label>
          <input
            id="rut"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="rut"
            value={rut}
            required
            placeholder="Ejemplo : 9.999.999.k"
            onChange={(e) => setRut(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label htmlFor="address" className="text-zinc-950 mb-1 font-medium">
            Dirección:
          </label>
          <input
            id="address"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="address"
            value={address}
            required
            placeholder="Ingresar dirección"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label htmlFor="country" className="text-zinc-950 mb-1 font-medium">
            Ciudad:
          </label>
          <input
            id="country"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="country"
            value={country}
            required
            placeholder="Ingresar ciudad"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        </div>

        <div className="flex flex-col max-w-full mt-5">
          <label
            htmlFor="dependencyNivel"
            className="text-zinc-950 mb-1 font-medium"
          >
            Índice de Barthel /<span className="text-sky-700 text-md font-semibold"> Nivel de depedencia  </span> :
          </label>
          <input
            id="dependencyNivel"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="dependencyNivel"
            value={dependencyNivel}
            required
            placeholder="Ingresar índice"
            onChange={(e) => setDependencyNivel(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-full mt-5">
          <label htmlFor="rol" className="text-zinc-950 mb-1 font-medium">
            Rol:
          </label>
          <input
            id="rol"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="rol"
            value={rol}
            required
            defaultValue={"RESIDENT"}
            placeholder="Ingresar Nombre"
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
        <br></br>
        <p className="text-zinc-950 font-bold">Información de tutor:</p>
        <hr className="border-t-2 border-sky-800  my-4" />
        <div className="flex flex-col">

        <div className="flex flex-col max-w-full mt-5">
          <label htmlFor="tutorname" className="text-zinc-950 mb-1 font-medium">
            Nombre de tutor:
          </label>
          <input
            id="tutorname"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutorname"
            value={tutorname}
            required
            placeholder="Ingresar Nombre"
            onChange={(e) => setTutorName(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label
            htmlFor="lastnamemother"
            className="text-zinc-950 mb-1 font-medium"
          >
            Apellido materno:
          </label>
          <input
            id="tutorlastnamemother"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutorlastnamemother"
            value={tutorlastnamemother}
            required
            placeholder="Ingresar Apellido"
            onChange={(e) => setTutorLastnamemother(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label
            htmlFor="tutorlastnamefather"
            className="text-zinc-950 mb-1 font-medium"
          >
            Apellido paterno:
          </label>
          <input
            id="tutorlastnamefather"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutorlastnamefather"
            value={tutorlastnamefather}
            required
            placeholder="Ingresar Apellido"
            onChange={(e) => setTutorLastnamefather(e.target.value)}
          />
        </div>
        </div>
        <div className="flex gap-2">
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label
            htmlFor="tutorphone"
            className="text-zinc-950 mb-1 font-medium"
          >
            Teléfono:
          </label>
          <input
            id="tutorphone"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutorphone"
            value={tutorphone}
            required
            placeholder="Ingresar teléfono"
            onChange={(e) => setTutorPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-44 md:max-w-full mt-5">
          <label htmlFor="tutorrut" className="text-zinc-950 mb-1 font-medium">
            Rut:
          </label>
          <input
            id="tutorrut"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutorrut"
            value={tutorrut}
            required
            placeholder="Ingresar rut"
            onChange={(e) => setTutorRut(e.target.value)}
          />
        </div>
        </div>

        <div className="flex flex-col max-w-full mt-5">
          <label
            htmlFor="tutoraddress"
            className="text-zinc-950 mb-1 font-medium"
          >
            Dirección:
          </label>
          <input
            id="tutoraddress"
            type="text"
            className="flex-grow min-h-10 px-2 rounded border-gray-500 border-2"
            name="tutoraddress"
            value={tutoraddress}
            required
            placeholder="Ingresar Dirección"
            onChange={(e) => setTutorAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col max-w-full mt-8 mx-auto mb-5">
          <button
            type="submit"
            className="w-full bg-sky-700 border cursor-pointer font-semibold hover:bg-sky-800 rounded-lg py-4 text-sky-50 text-lg  px-4 tracking-wide transition-colors uppercase"
          >
            Guardar
          </button>
        </div>

        </div>

      </form>
    </>
  );
};
