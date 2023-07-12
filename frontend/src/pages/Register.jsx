import * as React from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../assets/img/image1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    if (e.target.password.value === e.target.confirmPassword.value) {
      axios
        .post("http://localhost:5000/user/add", data)
        .then((res) => {
          console.log(res.data);
          setTimeout(() => navigate('/'), 1000)
        })
        .catch((err) => console.log(err));
    } else {
      alert("Password tidak sama");
      e.target.reset()
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
        <h1 className="text-black">Sign Up</h1>
        <p className="text-slate-400">
          Enter your details to create your account
        </p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="username" className="font-bold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Masukkan username"
              className="form"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="font-bold">
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
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Masukkan confirm password"
              className="form"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="role" className="font-bold">
              Select Role
            </label>
            <select name="role" id="role" className="form" required>
              <option value="guest">Guest</option>
              <option value="admin">Admin</option>
              <option value="supplier">Supplier</option>
            </select>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-emerald-400 px-4 py-1 text-white rounded-lg"
            >
              Submit
            </button>
            <Link
              to="/"
              className="bg-emerald-200 px-4 py-1 text-red-400 rounded-lg"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
