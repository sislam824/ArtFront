"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
    } else {
      // Handle validation errors
    }
  };

  return (
    <div id="login" className="login p-2  m-auto bg-white">
      <div className="bg-gray-100 py-2 mb-4 w-full lg:w-[90%] m-auto ">
        <h2 className="text-xl lg:text-2xl px-5 font-semibold">
          CUSTOMER LOGIN
        </h2>
      </div>
      <div
        data-aos="zoom-in"
        className="grid gap-4 sm:grid-cols-2 w-full lg:w-[90%] m-auto"
      >
        <div
          data-aos="fade-right"
          className="border border-gray-300 rounded p-4"
        >
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">Welcome Back!</h3>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Sign in with your email address.</h3>
          </div>
          <div className="mt-4">
            <form onSubmit={handleLogin}>
              <label htmlFor="email" className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-2 border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="font-semibold mt-4">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mt-4">
                <input type="checkbox" id="showPassword" className="mr-2" />
                <label htmlFor="showPassword">Show password</label>
              </div>
              <Button
                data-aos="fade-up"
                className="w-full  text-white font-bold py-6 px-4 mt-4 rounded-none"
              >
                Sign In
              </Button>
              <p className="text-red-500 mt-2">* Required Fields</p>
            </form>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="border border-gray-300 rounded p-4"
        >
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">New Customers</h3>
          </div>
          <div className="mt-4">
            <p>
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/signup">
              <Button
                data-aos="fade-up"
                className="w-full  text-white font-bold py-6 px-4 mt-4 rounded-none"
              >
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
