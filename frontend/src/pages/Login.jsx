import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (<>
      <div className="h-screen w-full">
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
            <div className="flex  max-w-5xl rounded-lg shadow-lg shadow-primary-300 w-full sm:w-8/10 lg:w-8/10 xl:w-8/10 bg-white sm:mx-0">
                <div className="flex flex-col w-full  md:w-1/2 p-6">
                    <div className="flex flex-col flex-1 justify-center mb-8 mt-2">
                        <h1 className="text-5xl text-center font-semibold">
                            Bienvenido 
                            <br /> 
                            <span className="text-4xl text-primary-600 px-1">Residencia Vida Plena</span>
                            </h1>
                        <div className="w-full mt-4">
                            <form className="form-horizontal w-7/10 mx-auto">

                                <div className="flex flex-col max-w-xs mx-auto mt-5">
                                    <label htmlFor="email" className="mb-1 font-medium">EMAIL</label>
                                    <input id="email" type="text" 
                                    className="flex-grow h-10 px-2 border rounded border-grey-200" 
                                    name="email" value="" required placeholder="Ingresar email"/>
                                </div>

                                <div className="flex flex-col mx-auto max-w-xs mt-5">
                                <label htmlFor="password" className="mb-1 font-medium">CONTRASEÑA</label>
                                    <input id="password" type="password" 
                                    className="flex-grow h-10 px-2 rounded border border-grey-300" 
                                    name="password" required placeholder="Ingresar contraseña"/>
                                </div>
                                {/* <div className="flex items-center mt-4">
                                    <input type="checkbox" name="remember" id="remember" className="mr-2"/> <label for="remember" className="text-sm text-grey-dark">Remember Me</label>
                                </div> */}
                                <div className="flex flex-col max-w-xs mt-8 mx-auto mb-5">
                                    <button type="submit" 
                                    className="bg-primary-500 hover:bg-blue-700 text-primary-50 text-sm font-semibold py-3 px-4 rounded">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <nav className="text-center mt-4">
                              <Link to="nueva-password" className="underline hover:font-semibold text-blue-dark text-xs">Olvide mi contraseña</Link> 
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2 rounded-r-lg bg-primary-400" >imagen</div>
            </div>
        </div>
    </div>
  </>);
};
