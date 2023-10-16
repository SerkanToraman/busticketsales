import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

interface User {
  email: string;
  password: string;
  name: string;
  surname: string;
  gender: number;
}
const LoginForm = () => {
  const { user, login, logout } = useUserContext();
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, Datepicker, Input, initTE } = await import(
        "tw-elements"
      );
      initTE({ Dropdown, Ripple, Datepicker, Input });
    };
    init();
  }, []);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/user"
      );
      const userData: User[] = await response.json();
      const user: User | undefined = userData.find(
        (user) => user.email === email
      );

      if (!user) {
        router.push("/register");
      } else {
        if (user.password === password) {
          login(user.email, user.name, user.surname, user.gender);
          setLoginError("");
          router.push("/home");
        } else {
          setLoginError("Incorrect password");
          setTimeout(() => {
            setLoginError("");
          }, 2000);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="flex items-center justify-center relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl">
          <div className="w-72">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="pt-8 pb-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    //autocomplete="off"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email address"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                  <p className="mt-2 text-xs">For test: serkan@hotmail.com</p>
                </div>
                <div className="relative">
                  <input
                    // autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <p className="mt-2 text-xs">For test: 1234</p>
                </div>
                <div className="relative flex items-center justify-center pt-4">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <Link href="/register" className=" text-sm ">
                    Register
                  </Link>
                </div>
                
    

                {loginError && (
                  <p className="text-red-600 text-sm  text-center">
                    {loginError}
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

export default LoginForm;
