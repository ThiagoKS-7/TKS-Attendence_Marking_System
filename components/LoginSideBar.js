
import React, {useState} from "react";
import classNames from "classnames";
import Logo from "@/public/logo.svg";
import siteMetadata from "./siteMetadata";
import { useRouter } from "next/router";
import $ from "jquery";
import Link from "./Link"

const LoginSidebar = () => {
    const {pathname} = useRouter();
    const router = useRouter();
    const routes = [
      '/register',
      '/forgot-password'
    ]
    const [height, setHeight] = useState(0);
    setInterval(() => {
      if (typeof window !== 'undefined') {
        setHeight(window.innerHeight);
      }
    }, 10)
    const handleLogin = async (event) => {
    
      try {
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
            error: function (xhr, ajaxOptions, thrownError) {
              console.log(xhr.status, thrownError);
              alert("Erro! Usuário e/ou senha inválidos!");
            }
          };
          
        await $.ajax(settings).done(async function (response) {
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("auth", JSON.stringify(response.auth));
            router.push("/")
            
        });
      } catch(e) {
        console.error(e);
      }
    }
    const handleRegister = async (event) => {
      try {
        let settings = ""
        const data = {
          name: event.target.name.value,
          email: event.target.email.value,
          age: parseInt(event.target.age.value),
          role: event.target.role.value.toLowerCase(),
          office: event.target.office.value,
          admin_id: event.target.admin_id.value,
          password: event.target.password.value,
        }
        const adminData = {
          name: event.target.name.value,
          email: event.target.email.value,
          age: parseInt(event.target.age.value),
          role: event.target.role.value.toLowerCase(),
          password: event.target.password.value,
        }
        if(data.role == "admin") {
          settings = {
            "url": "http://127.0.0.1:8000/v1/admin/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(adminData),
            error: function (xhr, ajaxOptions, thrownError) {
              console.log(xhr.status, thrownError);
              alert("Erro! Contate o administrador do sistema!");
            }
          };       
        } else {
          settings = {
            "url": "http://127.0.0.1:8000/v1/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(data),
            error: function (xhr, ajaxOptions, thrownError) {
              alert(`Erro! ${xhr.status} ${thrownError},Contate o administrador do sistema!`);
            }
          };
        }
          
        $.ajax(settings).done(async function (response) {
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("auth", JSON.stringify(response.auth));
            router.push("/")
            
        });
      } catch(e) {
        console.error(e);
      }
     
    }
    const handleForgot = async (event) => {
    
      try {
        const data = {
          email: event.target.email.value,
        }
  
        const settings = {
            "url": "http://127.0.0.1:8000/v1/forgot-password",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(data),
            error: function (xhr, ajaxOptions, thrownError) {
              console.log(xhr.status, thrownError);
              alert("Erro! Email não encontrado!");
            }
          };
          
        await $.ajax(settings).done(async function (response) {
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("auth", JSON.stringify(response.auth));
            
        });
      } catch(e) {
        console.error(e);
      }
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      switch(pathname) {
        case "/login":
          handleLogin(event);
          break;
        case "/register":
          handleRegister(event);
          break;
        case "/forgot-password":
          handleForgot(event);
          break;
        }
        
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
        {
          (routes.find(el => el == pathname) && height > 711) ?
          (
            <h1 className="mt-[2em] px-6 text-xl">
              {
                pathname === "/register" ? "Register your Account"
                : "Update your password"
              }
            </h1>
          ) : ""
        }
        <form className="mt-[1em] px-6" method="POST" onSubmit={handleSubmit}>   
            {
              pathname === "/register" ? 
              (
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                  />
                  <label 
                    htmlFor="name" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Full Name
                  </label>
                </div>
                
              ) : ''
            }
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
            {
              pathname === "/register" ? 
              (
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="number" 
                    name="age" 
                    id="age" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                  />
                  <label 
                    htmlFor="age" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Age
                  </label>
                </div>
                
              ) : ''
            }
             {
              pathname === "/register" ? 
              (
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="text" 
                    name="role" 
                    id="role" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                  />
                  <label 
                    htmlFor="role" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Role Name
                  </label>
                </div>
                
              ) : ''
            }
             {
              pathname === "/register" ? 
              (
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="text" 
                    name="office" 
                    id="office" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                  />
                  <label 
                    htmlFor="office" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Office Name
                  </label>
                </div>
                
              ) : ''
            }
             {
              pathname === "/register" ? 
              (
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="number" 
                    name="admin_id" 
                    id="admin_id" 
                    className="block
                    py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                    dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                  />
                  <label 
                    htmlFor="admin_id" 
                    className="peer-focus:font-medium 
                    absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                    peer-focus:-translate-y-6">
                        Admin ID
                  </label>
                </div>
                
              ) : ''
            }
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
            {
               (!routes.find(el => el == pathname)) ? 
               (
                <div className="flex flex-col">
                  <Link href="/forgot-password" className="opacity-80 hover:opacity-100">Forgot the Password?</Link>
                  <Link href="/register" className="opacity-80 hover:opacity-100">Dont have an Account?</Link>
                  <button 
                      type="submit" 
                      className="mt-5 text-white bg-blue-700 
                      hover:bg-blue-800 focus:ring-4 focus:outline-none 
                      focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
                      sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                      Submit
                  </button>
                </div>
               ) : 
               (
                <div className="flex flex-col">
                  <button 
                      type="submit" 
                      className={
                        classNames({
                        "mt-5": height > 711,
                        "text-white bg-blue-7 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800": true
                      })
                    }
                  >
                      Submit
                  </button>
                </div>
               )
            }
        </form>
      </div>
    </div>
  );
};
export default LoginSidebar;
