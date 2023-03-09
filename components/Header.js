import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import { Bars3Icon } from "@heroicons/react/24/outline";
const Header = (props) => {
    return (
        <>
            <div  className="ml-6 flex items-center md:w-full sticky z-10 transition-all duration-1000 ease-in-out w-[100%] h-[80-px] rounded bg-sky-200 dark:bg-violet-800 justify-between py-4">
                <div className="text-3xl ml-7 flex items-center font-extrabold justify-between">
                    TKS People Management
                </div>
                <div className="flex items-center text-base leading-5">
                <Link href="/logout">
                    Logout
                </Link>
                <ThemeSwitch />
                <button className="md:hidden" onClick={props.onMenuButtonClick}>
                  <Bars3Icon className="h-6 w-6" />
                </button>
                </div>
            </div>
        </>
    )
}

export default Header