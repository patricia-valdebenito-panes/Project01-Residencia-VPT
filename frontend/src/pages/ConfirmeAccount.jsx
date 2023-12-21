import React from 'react'

export const ConfirmeAccount = () => {
  return (<>
    <div className="h-screen w-full">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex  max-w-5xl rounded-lg shadow-lg shadow-primary-300 w-full sm:w-8/10 lg:w-8/10 xl:w-8/10 bg-white sm:mx-0">
              <div className="flex flex-col w-full  md:w-1/2 p-6">
                  <div className="flex flex-col flex-1 justify-center mb-8 mt-2">
                      <h1 className="text-5xl text-center font-bold leading-10">
                          Confirmar cuenta 
                          <br /> 
                          <span className="text-3xl text-primary-800 px-1">Residencia Vida Plena</span>
                          </h1>
                          <div className="w-full mt-4">
                              <form className="form-horizontal w-7/10 mx-auto">

                                  {/* <div className="flex items-center mt-4">
                                      <input type="checkbox" name="remember" id="remember" className="mr-2"/> <label for="remember" className="text-sm text-grey-dark">Remember Me</label>
                                  </div> */}
                                  <div className="flex flex-col max-w-xs mt-8 mx-auto mb-5">
                                      <button type="submit" 
                                      className="bg-primary-500 hover:bg-blue-700 text-primary-50 text-sm font-semibold py-3 px-4 rounded">
                                          Confirmar
                                      </button>
                                  </div>
                              </form>
                              {/* <nav className="text-center mt-4">
                                <Link to="nueva-password" className="underline hover:font-semibold text-blue-dark text-xs">Olvide mi contraseña</Link> 
                              </nav> */}
                          </div>
                  </div>
              </div>
              <div className="hidden md:block md:w-1/2 rounded-r-lg bg-primary-400" >imagen</div>
          </div>
      </div>
  </div>
</>);
}
