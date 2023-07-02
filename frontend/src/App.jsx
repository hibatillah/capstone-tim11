import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { DashboardAdmin, Order, Report, Product } from "./pages/admin";
import { DashboardSupplier } from "./pages/supplier";
import { DashboardGuest, Detail, About } from "./pages/guest";
import { Login } from "./pages";

function App() {
  // login handle
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user handle
  const [user, setUser] = React.useState();
  const handleUser = (user) => setUser(user);

  return (
    <Router>
      <Header />
      {!isLogin ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div className="flex">
          <Sidebar handleLogin={handleLogin} />
          <div className="flex-auto min-h-screen px-6 py-2 overflow-y-scroll">
            <Routes>
              {user === "admin" ? (
                <>
                  <Route path="/" element={<DashboardAdmin />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/product" element={<Product />} />
                </>
              ) : user === "supplier" ? (
                <>
                  <Route path="/" element={<DashboardSupplier />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<DashboardGuest />} />
                  <Route path="/detail" element={<Detail />} />
                  <Route path="/about" element={<About />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
