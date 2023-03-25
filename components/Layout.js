import React, { useState} from "react";
import classNames from "classnames";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LoginSidebar from "./LoginSideBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
const Layout = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const {pathname} = useRouter();
  const [user, setUser] = useState((typeof window !== 'undefined' && localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : "" );
  const [width, setWidth] = useState(0);
  const routes = [
    '/login',
    '/register',
    '/forgot-password'
  ]

  setInterval(() => {
    if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
    }
});
  return (
    <div
      className={
        width > 1000 ? (
          classNames({
            "grid min-h-screen": true,
            "grid-cols-sidebar": !collapsed,
            "grid-cols-sidebar-collapsed": collapsed,
            "transition-all duration-3000 ease-in-out": true,
            "transform-gpu": true,
          }) 
        ) : ''
      }
    >
      { 
        (!routes.find(el => el == pathname)) ? 
        (
          width > 1000 ?
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setSidebarCollapsed}
            shown={showSidebar}
          /> : ''
        ) : 
        (
          width > 1000 ?
          <LoginSidebar/> : ''
        )
      }
      <div className="">
        { (!routes.find(el => el == pathname)) ? <Header onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
          : ''}
        {props.children}
        {user ? <Footer/> : ''}
      </div>
    </div>
  );
};

export default Layout;