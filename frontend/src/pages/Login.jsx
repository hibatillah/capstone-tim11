import * as React from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../assets/img/image1.png";
import { Link } from "react-router-dom";
import { GetData } from "../components/api";

const User = () => {
  const { users } = GetData("http://localhost:5000/user");
  console.log(users);
  return users;
};

const Login = ({ handleLogin, handleUser }) => {
  const navigate = useNavigate();
  const dataUser = User();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (
      dataUser?.data.some(
        (item) => item.email === data.email && item.password === data.password
      )
    ) {
      const user = dataUser.data.find(
        (item) => item.email === data.email && item.password === data.password
      );
      handleLogin();
      handleUser(user._id, user.name, user.role);
      console.log("login success");
      navigate("/");
    } else {
      alert("Email atau password salah");
      event.target.reset();
    }
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
