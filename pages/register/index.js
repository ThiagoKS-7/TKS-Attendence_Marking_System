import Image from 'next/image';
import MainLight from "@/public/main/light.gif";
import MainDark from "@/public/main/dark.gif";
import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import ThemeSwitch from '@/components/ThemeSwitch'
const Login = () => {
    const [theme, setTheme] = useState("dark");
    setInterval(() => {
        if (typeof window !== 'undefined') {
            setTheme(localStorage.getItem('theme'));
        }

    }, 10)
    return (<>
       <Head>
            <title>TKS - Login</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex flex-col w-[115vw] transition fade-in-left 1s ease-in-out  self-center items-center justify-center transform-gpu'>
            {
                theme == 'light' ?  <Image src={MainLight} alt="" width={500} height={500}/>
                : <Image src={MainDark} alt="" width={500} height={500}/>
            }
            <div className='absolute top-3 right-0'>
                <ThemeSwitch />
            </div>    
            <h1 className='text-7xl font-extrabold'>Are you ready??</h1>
            <h3 className="text-3xl mt-5 text-zinc-400">C&apos;mon, let&apos;s get started! 🧭</h3>
        </div>
    </>)
}

export default Login;