"use client";
import React, { useState } from "react";
import { Service, Auth } from "@/services/service";
/* import withAuthRedirect from '@/services/authRedirect'; */
import useRequireAuth from "@/services/useRequireAuth";
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();



  const handleLogin = async () => {
    try {
      let response = await Auth.login(email, password);
      
      if (response.success == true) {
        console.log(response.success == true)
        router.push("/");
        router.refresh();
      }
      console.log("res: ", response);
    } catch (error) {
      console.log("err: ", error);
    }
  };

  useRequireAuth();

  return (
    <div className="flex justify-center w-full mt-72">
      <div className="form-wrapper flex flex-col w-72 gap-7">
        <div className="text-center">LOGIN</div>
        <input
          className="bg-detail_blue p-3"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
