import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import carImage from "../assets/car_image.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginGoogleSuccess = async () => {
    console.log("succes");
  };

  return (
    <div className="flex items-center  justify-end  mx-auto md:h-screen  lg:py-0">
      <img
        src={carImage}
        className="w-2/3 saturate-[200%] contrast-[110%] brightness-[70%] "
      />
      <div className="form p-7s rounded-xl w-1/3">
        <h1 className="flex justify-center mb-6 text-2xl font-semibold text-white">
          Login
        </h1>

        <form className=" w-full justify-center  grid gap-y-4">
          <div className="logo w-[100px] h-9 bg-gray-300"></div>
          <h1 className="text-2xl font-bold">Welcome, Admin BCR</h1>
          <div className="grid w-full">
            <label
              className=" font-light text-sm  mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email :
            </label>
            <input
              className=" appearance-none border-2 border-gray-200 py-2 px-3 rounded w-[370px] leading-tight focus:outline-none focus:bg-white  font-light text-sm "
              id="email"
              type="email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              placeholder="Masukkan email"
            />
          </div>

          <div className="grid justify-center w-full">
            <label
              className="font-light text-sm   mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className=" appearance-none border-2 border-gray-200 py-2 px-3 rounded w-[370px] leading-tight focus:outline-none focus:bg-white  font-light text-sm "
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              placeholder="Masukkan password"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-y-2">
            <button
              className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-3 rounded w-[370px] "
              typeof="button"
            >
              Sign In
            </button>
            <Link to="/">
              <button className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-3 rounded w-[370px] ">
                Home Page
              </button>
            </Link>

            <GoogleOAuthProvider clientId="114463867236-ld2p6ngrvimrkdl47v11cgi6sksom583.apps.googleusercontent.com">
              <GoogleLogin onSuccess={handleLoginGoogleSuccess} />;
            </GoogleOAuthProvider>
          </div>
        </form>
      </div>
    </div>
  );
}
