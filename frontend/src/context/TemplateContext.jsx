import React, { createContext, useEffect, useState } from "react";
import ClientAxios from "../config/ClientAxios";
import { useNavigate } from "react-router-dom";

const TemplateContext = createContext();

const TemplateProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("navigate: ", navigate);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [templates, setTemplates] = useState([]);
  const [alert, setAlert] = useState([]);
  const [step2, setStep2] = useState("");

  const showAlert = (alert) => {
    setAlert(alert);
    // setTimeout(()=>{
    //   setAlert({});
    // },6000)
  };

  useEffect(() => {
    const getTemplates = async () => {
      try {
        if (!token) {
          console.log("sin token : ");
          return;
        }

        const { data } = await ClientAxios("/templates", config);
        console.log("get plantillas: ", data);
        setTemplates(data);
  
      } catch (error) {
        console.log("error : ", error);
      }
      // console.log("newTemplate : ",newTemplate);
    };

    getTemplates();
  }, []);

  const submitTemplate = async (newTemplate) => {
    const { type } = newTemplate;
    switch (type) {
      case "CT2":
        setStep2("/templates/cambio-de-posicion");
        break;
      case "CT3":
        setStep2("/curaciones");
        break;
      case "CT4":
        setStep2("/vacunas");
        break;
      case "CT5":
        setStep2("/visita-medica");
        break;
      case "CT6":
        setStep2("/signos-vitales");
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }

    const token = localStorage.getItem("token");

    try {
      if (!token) {
        console.log("sin token : ");
        return;
      }

      const { data } = await ClientAxios.post("/templates",newTemplate,config);
      console.log("post template base: ", data);
      navigate('/templates/cambio-de-posicion')
  

    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <TemplateContext.Provider
      value={{
        alert,
        showAlert,
        submitTemplate,
        templates
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateProvider };
export default TemplateContext;
