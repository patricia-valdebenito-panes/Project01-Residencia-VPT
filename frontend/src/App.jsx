import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";
import { SecureRoute } from "./Layouts/SecureRoute";

import { AuthProvider } from "./context/AuthProvider";
import { ClientProvider } from "./context/ClientContext";
import { TemplateProvider } from "./context/TemplateContext";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import { NewPassword } from "./pages/newPassword";
import { RequestPassword } from "./pages/RequestPassword";
import { ConfirmeAccount } from "./pages/ConfirmeAccount";

import { Templates } from "./pages/Templates";
import { Template } from "./pages/Template";
import { NewTemplate } from "./pages/NewTemplate";
import { RegisterChangePosition } from "./pages/RegisterChangePosition";
import { RegisterCures } from "./pages/RegisterCures";

// import { Algo } from "./pages/Algo";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ClientProvider>
            <TemplateProvider>
            <Routes>
              {/* state auth = athenticated */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="nueva-password/:token" element={<NewPassword />} />
                <Route path="nueva-password" element={<RequestPassword />} />
                <Route
                  path="confirmar-cuenta/:id"
                  element={<ConfirmeAccount />}
                />
              </Route>

              {/* state auth = unathenticated */}
              <Route path="templates" element={<SecureRoute />}>
                <Route index element={<Templates />} />
                <Route path="nuevo-template" element={<NewTemplate />} />
                <Route path="cambio-de-posicion" element={<RegisterChangePosition />} />
                <Route path="curaciones" element={<RegisterCures />} />
                <Route path=":id" element={<Template />} />
              </Route>
            </Routes>
            </TemplateProvider>
          </ClientProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
