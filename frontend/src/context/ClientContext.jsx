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
        setClients(data);
      } catch (error) {
        console.log("error : ", error);
      }

      // console.log("newTemplate : ",newTemplate);
    };

    getClients();
  }, []);

  const getClient = async (_id) => {
    try {
      if (!token) {
        console.log("sin token : ");
        return;
      }

      const { data } = await ClientAxios(`/client/${_id}`, config);
      setClient(data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

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
