import * as React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  // login state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // submit handle
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log({ data });
    handleLogin()
    navigate('/')
  };

  return (
    <main className="grid place-items-center">
      <div className="card">
        <h1 className="text-blue-600">Login</h1>
        <p className="w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan password"
              className="form"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
