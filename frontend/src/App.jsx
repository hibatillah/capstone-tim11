import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import {
  DashboardAdmin,
  Order,
  Report,
  Product,
  Pesanan,
} from "./pages/admin";
import { DashboardSupplier } from "./pages/supplier";
import { DashboardGuest, Detail, About, History } from "./pages/guest";
import { Login } from "./pages";
import Register from "./pages/Register";
import BahanBaku from "./pages/admin/BahanBaku";
import OrderGuest from "./pages/guest/OrderGuest";
import PesananSupplier from "./pages/supplier/PesananSupplier";
import Editproduct from "./pages/admin/Editproduct";
import Pesanbahanbaku from "./pages/admin/Pesanbahanbaku";

function App() {
  // login handle
  const [isLogin, setIsLogin] = React.useState(false);
  const handleLogin = () => setIsLogin(!isLogin);

  // user handle
  const [user, setUser] = React.useState({
    id: "",
    nama: "",
    role: "",
  });
  const handleUser = (id, nama, role) =>
    setUser({
      id: id,
      nama: nama,
      role: role,
    });

  return (
    <Router>
      {!isLogin ? (
        <Routes>
          <Route
            path="/"
            element={
              <Login handleUser={handleUser} handleLogin={handleLogin} />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <>
          <Header user={user} />
          <div className="flex">
            <Sidebar handleLogin={handleLogin} user={user} handleUser={handleUser} />
            <main className="flex-auto">
              <Routes>
                {user.role === "admin" ? (
                  <>
                    <Route path="/" element={<DashboardAdmin />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/bahanbaku" element={<BahanBaku />} />
                    <Route path="/pesanbahanbaku" element={<Pesanbahanbaku />} />
                    <Route path="/editproduct/:id" element={<Editproduct />} />
                    <Route path="/pesanan" element={<Pesanan />} />
                  </>
                ) : user.role === "supplier" ? (
                  <>
                    <Route path="/" element={<DashboardSupplier />} />
                    <Route path="/pesanan" element={<PesananSupplier />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<DashboardGuest />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path='/history' element={<History />} />
                    <Route path="/ordercustomer" element={<OrderGuest user={user} />} />
                    <Route path="/about" element={<About />} />
                  </>
                )}
              </Routes>
            </main>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
