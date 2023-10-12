"use client";
import React, { useState, useEffect } from "react";
import SuccessCard from "@/components/SuccessCard";
import Loader from "@/components/Loader";

const RegisterPage = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
      {loader ? <SuccessCard /> : <Loader />}
    </div>
  );
};

export default RegisterPage;
