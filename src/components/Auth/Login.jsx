import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("e@e.com");
  const [password, setPassword] = useState("123");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none border-2 bg-transparent border-emerald-600 placeholder:text-black text-xl py-2 px-5 rounded-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none border-2 bg-transparent border-emerald-600 placeholder:text-black text-xl py-2 px-5 rounded-full mt-6"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="border-2 bg-emerald-600 placeholder:text-black text-xl py-2 px-5 rounded-full mt-3">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
