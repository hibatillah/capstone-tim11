import * as React from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../assets/img/image1.png";
import { Link } from "react-router-dom";
const Login = ({ handleLogin }) => {
  // login state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // submit handle
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log({ data });
    handleLogin();
    navigate("/");
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Kiri */}
      <div className="h-screen overflow-hidden">
        <img src={Foto} alt="" className="w-full h-full object-cover" />
      </div>
      {/* kanan */}
      <div className="flex flex-col justify-center px-20">
        <h1 className="text-black">Welcome to Athea Beauty</h1>
        <p className="text-slate-400">
          New Here? <Link to={"/register"} className="text-red-500"> Create Account</Link>
        </p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan email"
              className="form"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan password"
              className="form"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-end">
              <label
                htmlFor="password"
                className="text-red-500  text-sm"
              >
                Forgot Password?
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-emerald-400 px-4 py-1 text-white rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
