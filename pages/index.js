import React, { useEffect,useState } from 'react'
import ProfileLight from "@/public/profile/light.svg"
import ProfileDark from "@/public/profile/dark.svg"
import AdminLight from "@/public/profile/admin_light.svg"
import AdminDark from "@/public/profile/admin_dark.svg"
import Department from "@/public/dep.svg"
import Link from '@/components/Link'
import classNames from "classnames"
import Head from 'next/head'
import $ from 'jquery'
import { useRouter } from 'next/router'

const Home = () => {
    const [user, setUser] = useState("");
    const [theme, setTheme] = useState("dark");
    const [officeRole, setOfficeRole] = useState("-");
    const [width, setWidth] = useState(0);
    const router = useRouter();

    useEffect(() => {
      const settings = {
        "url": "http://localhost:3000/api/checkUser",
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/json"
        },
        "data": {
            "user": typeof window !== 'undefined' ? localStorage.getItem('user') : null
        },
        complete: function(xhr, textStatus) {
            if(xhr.status == 403) {
                router.push("/forbidden")
            } else {
                setUser(JSON.parse(localStorage.getItem('user')))
                if (user) {
                    setTheme(localStorage.getItem('theme'));
                    setOfficeRole(user?.office ? user.office : user.role);
                }
            }
        } 
      };
      
    
      $.ajax(settings);

    },[])
    setInterval(() => {
        if (typeof window !== 'undefined') {
            setTheme(localStorage.getItem('theme'));
            setWidth(window.innerWidth);
        }

    }, 10)
    return (<>
        <Head>
            <title>TKS - Homepage</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="mt-[1em] ml-[1.5em] text-4xl font-extrabold">HomePage</h1>
        <div className="flex items-center row-span-2  col-span-2 ... self-center mt-[4.5em] transform-gpu">
            <div className={
                classNames({
                    "ml-[3em]": width > 1000,
                    "ml-[1em]": width <= 1000,
                    "flex justify-between py-2 min-w-[80%] w-[94%] h-[8em] rounded bg-gray-300 dark:bg-sky-900": true
                })
            }
            >
                <div className={
                    classNames({
                        "border-r-2 border-slate-900 dark:border-sky-300": width >= 600,
                        "flex ml-3 min-w-[30vw]": true
                    })
                }>
                    <div className="flex items-center transition-all duration-1000 ease-out">
                        {
                            theme === 'dark' ? (
                                user.role === 'admin' ?
                                <AdminDark/> : <ProfileDark/>
                            ) : (
                                user.role === 'admin' ?
                                <AdminLight/> : <ProfileLight/>
                            )
                        }
                    </div>
                    <div className="flex flex-col  justify-center  pr-7 ml-6">
                        <h1 className="text-xl">{user ? user.name : "Thiago Kasper de Souza"}</h1>
                        <h3 className="text-md text-zinc-400">{officeRole.charAt(0).toUpperCase() + officeRole.slice(1)}</h3>
                        <Link href="/profile">Acessar Perfil</Link>
                    </div>
                </div>
                {
                    width >= 600 ?
                    (
                        <div className="flex w-fit">
                            <div className="flex ml-5 items-center transition-all duration-1000 ease-out">
                            <Department/>
                            </div>
                            <div className="flex flex-col  justify-center  mt-[1em] pr-7 ml-2">
                                <h1 className="text-xl">Department: ABC 123</h1>
                                <h3 className="text-md text-zinc-400">Sector: ABC 123</h3>
                            </div>
                        </div>
                    ) : ''
                }
                {
                    width > 1000 ? 
                    (
                        <div className="flex w-[28vw]">
                            <div className="flex ml-5 items-center transition-all duration-1000 ease-out">
                                {
                                    theme === 'dark' ? (
                                        <AdminDark/>
                                    ) : (
                                        <AdminLight/> 
                                    )
                                }
                            </div>
                            <div className="flex flex-col  justify-center  mb-4 pr-7 ml-2">
                                <h1 className="text-xl">{user ? user.name : "-"}</h1>
                                <h3 className="text-md text-zinc-400">{officeRole.charAt(0).toUpperCase() + officeRole.slice(1)}</h3>
                                <Link href="/profile">Acessar Perfil</Link>
                            </div>
                        </div>
                    ) : ''
                }
                {
                    user.role === 'employee' ?
                    (
                        <div className="flex w-[30vw]">
                            <div className="flex ml-5 items-center transition-all duration-1000 ease-out">
                                {
                                    theme === 'dark' ? (
                                        <AdminDark/>
                                    ) : (
                                        <AdminLight/>
                                    )
                                }
                            </div>
                            <div className="mt-7 mb-4 pr-7 ml-2">
                                <h1 className="text-xl">{user ? user.name : "-"}</h1>
                                <h3 className="text-md text-zinc-400">{officeRole.charAt(0).toUpperCase() + officeRole.slice(1)}</h3>
                                <Link href="/profile">Acessar Perfil</Link>
                            </div>
                        </div>
                    ) : ''
                }   
            </div>
        </div>
    </>)
}


export default Home;