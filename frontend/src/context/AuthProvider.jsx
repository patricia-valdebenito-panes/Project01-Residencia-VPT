import React, { createContext, useEffect, useState } from "react";
import ClientAxios from "../config/ClientAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authentificationUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await ClientAxios("/users/perfil", config);
        setAuth(data);
      } catch (error) {
        console.log("error : ", error);
      }
    };

    authentificationUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
