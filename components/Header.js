import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import classNames from "classnames";
const Header = (props) => {
    const router = useRouter();
    const [width, setWidth] = useState(0);
    const handleLogout = () => {
        console.log('LOGGIN OUT')
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', '');
            localStorage.removeItem('auth', '');
        }
    };
    setInterval(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }

    }, 10)
    return (
        <>
            <div className="flex items-center md:w-full sticky z-10 transition-all duration-1000 ease-in-out w-[100%] h-[80-px] rounded bg-sky-200 dark:bg-violet-800 justify-between py-4 transform-gpu">
                <div className={
                    classNames({
                        "text-3xl ml-[2em] flex items-center font-extrabold justify-between": width > 100,
                        "text-3xl ml-[2em] flex items-center font-extrabold": width <= 100
                    })
                }>
                    TKS People Management
                </div>
                {
                    width >= 600 ?
                        (
                            <div className="flex items-center text-base leading-5">
                                <button onClick={handleLogout()}>
                                    Logout
                                </button>
                                <ThemeSwitch />
                            </div>
                        ) :
                        ''
                }

            </div>
        </>
    )
}

export default Header