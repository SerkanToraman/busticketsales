import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const router = useRouter();
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, Datepicker, Input, Select, initTE } =
        await import("tw-elements");
      initTE({ Dropdown, Ripple, Select, Datepicker, Input });
    };
    init();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    data.gender = parseInt(data.gender);
    try {
      const response = await fetch(
        "https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(data);
      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const errorKeys = Object.keys(errors);
  const hasErrors = errorKeys.length > 0;

  return (
    <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="w-72 h-fit">
            <div>
              <h1 className="text-2xl font-semibold">Register</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    className="pl-1 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    //autocomplete="off"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    {...register("email", { required: true })}
                  />
                  <label
                    for="email"
                    class="pl-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    {...register("password", { required: true, minLength: 4 })}
                    className="pl-1 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                    placeholder="Password"
                  />

                  <label
                    for="password"
                    className="pl-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    className="pl-1 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  <label
                    for="name"
                    className="pl-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="surname"
                    type="text"
                    className=" pl-1 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Surname"
                    {...register("surname", { required: true })}
                  />
                  <label
                    for="surname"
                    className=" pl-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Surname
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="gender"
                    className="peer placeholder-transparent h-10 w-full  text-gray-600 text-4 border-b-2  border-gray-300 focus:outline-none focus:borer-rose-600"
                    {...register("gender", { required: true })}
                  >
                    <option value="">Select a Gender</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                </div>
                <div className="relative" data-te-datepicker-init>
                  <input
                    type="text"
                    className="pl-1 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                    placeholder="Select a date"
                    {...register("dateOfBirth", { required: true })}
                    data-te-datepicker-toggle-ref
                    data-te-datepicker-toggle-button-ref
                  />
                  <label
                    htmlFor="floatingInput"
                    className="pl-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Date of Birth
                  </label>
                </div>

                <div className="relative flex items-center justify-center pt-4">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Button
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <Link href="/login" className=" text-sm ">
                    Already a member?
                  </Link>
                </div>
                {hasErrors && (
                  <p className="text-red-500 text-sm  text-center mt-2">
                    {(() => {
                      if (errors.email) {
                        return "Email is required.";
                      }
                      if (errors.password) {
                        return "Password is required and must be at least 4 characters.";
                      }
                      if (errors.name) {
                        return "Name is required.";
                      }
                      if (errors.surname) {
                        return "Surname is required.";
                      }

                      if (errors.gender) {
                        return "Gender is required.";
                      }
                      if (errors.dateOfBirth) {
                        return "Date of birth is required.";
                      }
                      return "";
                    })()}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
