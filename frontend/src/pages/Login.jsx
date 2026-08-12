import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { verifyUserForLogin } = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitNewUserData = async () => {
      const res = await verifyUserForLogin(email, password);
      //alert(res.data.message);
      console.log(res);
      if (res.success) {
        navigate("/");
      }
    };

    submitNewUserData();
  };
  const navigate = useNavigate();
  return (
    <div className="max-h-screen m-auto pt-10 mt-10 mb-10">
      <div className="m-auto w-[75%] p-10">
        <h1 className="text-3xl text-center mb-5">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-auto  p-5 gap-5  w-[45%] "
          action=""
        >
          <input
            type="text"
            name="email"
            id="email"
            className="border border-blue-300 rounded-sm h-10 pl-2 pr-2 "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="password"
            id="password"
            className="border border-blue-300 rounded-sm h-10 pl-2 pr-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="m-auto bg-blue-300 border h-10 w-[25%] p-1 hover:bg-blue-400"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-sm">Forgot the password?</p>
        <p className="text-center text-sm">
          Haven't had an account?{" "}
          <a
            href=""
            className="underline hover:text-blue-600"
            onClick={() => navigate("/register")}
          >
            Sign up
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
