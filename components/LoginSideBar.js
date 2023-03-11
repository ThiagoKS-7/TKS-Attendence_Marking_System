
import React from "react";
import classNames from "classnames";
import Logo from "@/public/logo.svg";
import siteMetadata from "./siteMetadata";
import { useRouter } from "next/router";
import $ from "jquery";
const LoginSidebar = () => {
    const router = useRouter();
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
    
         // Get data from the form.
        const data = {
          email: event.target.email.value,
          password: event.target.password.value,
        }

        const settings = {
            "url": "http://127.0.0.1:8000/v1/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(data),
          };
          
        $.ajax(settings).done(async function (response) {
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("auth", JSON.stringify(response.auth));
            
        });
    }
  return (
    <div
      className={classNames({
        "bg-gray-700 text-zinc-300 dark:bg-slate-700 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all duration-1000 ease-out": true,
        "w-[330px]": true,
      })}
    >
      <div
        className={classNames({
          "flex flex-col h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-sky-100 transition-none": true,
            "p-4 justify-between": true,
          })}
        >
            <Logo width="80px" />
            <span className="mt-5 ml-8 h-fit text-2xl font-semibold">
                {siteMetadata.headerTitle}
            </span>
        </div>
        <form className="mt-[3em] px-6" method="POST" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                 />
                <label 
                    htmlFor="email" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 
                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                    dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                />
                <label 
                    htmlFor="password" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                    top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6"
                >
                    Password
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="password" 
                    name="repeat_password" 
                    id="floating_repeat_password" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 
                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                    dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    minLength="8" 
                    required 
                />
                <label 
                    htmlFor="floating_repeat_password" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
                    top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6"
                >
                    Confirm password
                </label>
            </div>
            <button 
                type="submit" 
                className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
                sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
      </div>
    </div>
  );
};
export default LoginSidebar;
