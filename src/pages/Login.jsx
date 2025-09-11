import React from "react";

function Login() {
  return (
    <div className="bg-[#56ACBD] w-full min-h-screen justify-between flex">
      <div className="bg-white w-1/2 min-h-screen flex flex-col justify-center items-center">
        <div className="font-extrabold text-5xl pb-10 text-[#56ACBD]">
          <h1>ADMIN ACCOUNT</h1>
        </div>
        <div
          className="bg-gradient-to-bl w-150 from-[#40DBFA] to-[#A0A2A3]/40
 items-end shadow-xl p-15 pr-10 flex flex-col rounded-4xl gap-2"
        >
          <h1 className="font-medium text-2xl w-100 text-right pb-5">
            USE THIS ACCOUNT TO LOGIN AS ATMIN
          </h1>
          <input
            className="bg-[#56ACBD]/70 w-90 shadow-lg font-bold p-3"
            placeholder="suga@mail.com"
          />
          <input
            className="bg-[#56ACBD]/70 w-90 shadow-lg font-bold p-3"
            placeholder="suganteng"
          />
          <div className="text-[10px]">
            <p>
              IF YOU WANT TO LOGIN AS USER{" "}
              <a href="#" className="text-blue-700">
                CLICK HERE
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#56ACBD] w-1/2 min-h-screen flex justify-center flex-col items-center">
        <div className="text-white text-4xl font-extrabold w-150 text-center mb-10">
          <h1>SYSTEM AUTHENTICATION MANAGEMENT</h1>
        </div>
        <div className="bg-white/30 backdrop-blur-md items-center shadow-xl p-20 flex flex-col rounded-4xl">
          <h1 className="text-2xl font-bold text-white top-0 absolute pt-5">
            LOGIN
          </h1>
          <form className="flex flex-col justify-center item gap-5 mt-5">
            <input
              type="text"
              placeholder="Email"
              className="p-3 rounded-3xl bg-white inset-shadow-sm/30 w-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-3xl bg-white inset-shadow-sm/30 w-100"
            />
            <button className="bg-[#56ACBD] text-white p-2 rounded-md">
              Login
            </button>
          </form>
          <p className="pt-5 text-white">
            Don't have account?{" "}
            <a href="#" className="text-blue-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
