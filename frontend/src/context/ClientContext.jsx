import React, { createContext, useEffect, useState } from "react";
import ClientAxios from "../config/ClientAxios";
import { useNavigate } from "react-router-dom";

const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState([]);
  // const [alert, setAlert] = useState([]);
  // const [step2, setStep2] = useState('');

  const showAlert = (alert) => {
    setAlert(alert);
    // setTimeout(()=>{
    //   setAlert({});
    // },6000)
  };

  useEffect(() => {
    const getClients = async () => {
      try {
        if (!token) {
          console.log("sin token : ");
          return;
        }

        const { data } = await ClientAxios("/client/list-client", config);
        console.log("get clients list : ", data);
        setClients(data);
      } catch (error) {
        console.log("error : ", error);
      }

      // console.log("newTemplate : ",newTemplate);
    };

    getClients();
  }, []);

  const getClient = async (_id) => {
    console.log("get __id : ", _id);
    try {
      if (!token) {
        console.log("sin token : ");
        return;
      }

      const { data } = await ClientAxios(`/client/${_id}`, config);
      // console.log("get client : ", data);
      setClient(data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  // const submit___ = async (dat) => {
  //   const token = localStorage.getItem("token");
  //   const { type } = newTemplate;

  //   switch () {
  //     case "":
  //       set('');
  //       break;
  //     case "":
  //       set('');
  //       break;
  //     default:
  //       console.log(`Sorry, we are out of ${expr}.`);
  //   }
  //   try {

  //     if (!token) {
  //       console.log("sin token : ");
  //       return;
  //     }

  //     const { data } = await ClientAxios.post("",dat, config);
  //     console.log("post template base: ", data);

  //     data._id && navigate()

  //   } catch (error) {
  //     console.log("error : ", error);
  //   }
  // };

  return (
    <ClientContext.Provider
      value={{
        client,
        clients,
        getClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider };
export default ClientContext;
