import { useState } from "react";
import toast from "react-hot-toast";
import { IoCopy } from "react-icons/io5";

function Login() {
  const [email] = useState("suga@mail.com");
  const [password] = useState("suganteng");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  return (
    <div className="bg-[#56ACBD] w-full h-screen flex justify-between overflow-hidden">
      {/* LEFT SIDE */}
      <div className="bg-white w-1/2 h-screen flex flex-col justify-center items-center">
        <div className="font-extrabold text-5xl pb-10 text-[#56ACBD]">
          <h1>ADMIN ACCOUNT</h1>
        </div>
        <div className="bg-gradient-to-bl w-170 from-[#40DBFA] to-[#A0A2A3]/40 items-end shadow-xl p-15 pr-10 flex flex-col rounded-4xl gap-2">
          <h1 className="font-semibold text-[36px] w-120 text-right pb-5">
            USE THIS ACCOUNT TO LOGIN AS ADMIN
          </h1>

          {/* EMAIL */}
          <div className="bg-[#56ACBD]/70 w-90 shadow-lg font-bold p-3 flex justify-between items-center">
            <input
              value={email}
              disabled
              className="bg-transparent outline-none"
            />
            <button
              onClick={() => handleCopy(email)}
              className="cursor-pointer">
              <IoCopy size={20} />
            </button>
          </div>

          {/* PASSWORD */}
          <div className="bg-[#56ACBD]/70 w-90 shadow-lg font-bold p-3 flex justify-between items-center">
            <input
              value={password}
              disabled
              className="bg-transparent outline-none"
            />
            <button
              onClick={() => handleCopy(password)}
              className="cursor-pointer">
              <IoCopy size={20} />
            </button>
          </div>

          <div className="text-[10px] pt-2">
            <p className="text-[#980202]">
              IF YOU WANT TO LOGIN AS USER{" "}
              <a
                href="#"
                className="text-[#0000FF] font-semibold">
                CLICK HERE
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#56ACBD] w-1/2 h-screen flex justify-center items-center flex-col">
        <div className="text-white text-4xl font-extrabold w-150 text-center mb-10">
          <h1>SYSTEM AUTHENTICATION MANAGEMENT</h1>
        </div>
        <div className="bg-white/10 backdrop-blur-md items-center shadow-xl p-20 flex flex-col rounded-4xl">
          <h1 className="text-2xl font-bold text-white mb-5">LOGIN</h1>
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
            <button
              className="bg-gradient-to-b from-[#7191E6] to-[#3D52A1]
             hover:from-[#365CC1] hover:to-[#071C6D]
             text-white p-2 rounded-md cursor-pointer">
              Login
            </button>
          </form>
          <p className="pt-5 text-white">
            Don't have account?{" "}
            <a
              href="#"
              className="font-bold text-[#0000FF]">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
