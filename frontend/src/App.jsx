import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NewPassword } from "./pages/newPassword";
import { RequestPassword } from "./pages/RequestPassword";
import { ConfirmeAccount } from "./pages/ConfirmeAccount";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
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
            <Route path='/'></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
