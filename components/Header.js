import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import { useRouter } from 'next/router'
const Header = (props) => {
    const router = useRouter();
    const handleLogout =() => {
        console.log('LOGGIN OUT')
        if(typeof window !== 'undefined') {
            localStorage.setItem('user', '');
            localStorage.removeItem('auth', '');
        }
    };
    return (
        <>
            <div className="ml-6 flex items-center md:w-full sticky z-10 transition-all duration-1000 ease-in-out w-[100%] h-[80-px] rounded bg-sky-200 dark:bg-violet-800 justify-between py-4 transform-gpu">
                <div className="text-3xl ml-7 flex items-center font-extrabold justify-between">
                    TKS People Management
                </div>
                <div className="flex items-center text-base leading-5">
                <button onClick={handleLogout()}>
                    Logout
                </button>
                <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default Header