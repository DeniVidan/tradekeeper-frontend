"use client";
import React, { useState } from "react";
import { Service, Auth } from "@/services/service";
import useRequireAuth from "@/services/useRequireAuth";
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let auth = Auth.state;
  const router = useRouter();


  const handleLogin = async () => {
    try {
      let response = await Auth.register(firstname, lastname, email, username, password);
      
      if (response.success == true) {
        console.log(response.success == true)
        router.replace('/');
      }
      console.log("res: ", response);
    } catch (error) {
      console.log("err: ", error);
    }
  };

  useRequireAuth();


  return (
    <div className="flex justify-center w-full mt-52">
      
      <div className="form-wrapper flex flex-col w-72 gap-4">
        <div className="text-center">REGISTER</div>

        <div className="flex gap-1">
          <input
          className="bg-detail_blue p-3 w-1/2"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
          <input
          className="bg-detail_blue p-3 w-1/2"
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </div>

        <input
          className="bg-detail_blue p-3"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <input
          className="bg-detail_blue p-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-detail_blue p-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-light_white text-black font-bold p-2"
          onClick={handleLogin}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
