import React, { useState } from "react";
import { useUserStore } from "../store/user";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { createUserItem } = useUserStore();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitNewUserData = async () => {
      const newUser = {
        name: name,
        password: password,
        email: email,
      };
      const res = await createUserItem(newUser);
      //alert(res.data.message);
      console.log(res);
      if (res.success) {
        navigate("/login");
      }
    };

    submitNewUserData();
  };

  return (
    <div className="max-h-screen m-auto pt-10 mt-10 mb-10">
      <div className="m-auto w-[40%]">
        <h1 className="text-3xl text-center mb-5">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border border-gray-400 rounded-sm h-10 pl-2 pr-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="border border-gray-400 rounded-sm h-10 pl-2 pr-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-gray-400 rounded-sm h-10 pl-2 pr-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="m-auto bg-blue-300 border h-10 w-[25%] p-1 hover:bg-blue-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;

// name: String,
//   email: String,
//   isAdmin: Boolean,
//   password: String,
//   createdAt: Date,
//   address: String,
//   phone: String,
//   profileImage: String,
