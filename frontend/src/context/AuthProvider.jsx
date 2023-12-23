import React, { createContext, useEffect, useState } from "react";
import ClientAxios from "../config/ClientAxios";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {

    const authentificationUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
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
        if(pathname === '/registro'){return }
        navigate('/templates');
      } catch (error) {
        setAuth({});
        console.log("error : ", error);
      }
      finally{
        setLoading(false);
      }
    };

    authentificationUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        loading,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
