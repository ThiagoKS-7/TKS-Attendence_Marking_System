import classNames from "classnames";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LoginSidebar from "./LoginSideBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
const Layout = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const {pathname} = useRouter();
  const [user, setUser] = useState((typeof window !== 'undefined' && localStorage.getItem('user').length > 0) ? JSON.parse(localStorage.getItem('user')) : "" );
  return (
    <div
      className={classNames({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-1000 ease-in-out": true,
      })}
    >
      { pathname !== '/login' ?
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      : <LoginSidebar/>}
      <div className="">
        <Header onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {props.children}
        <Footer/>
        {/* {
          user ?
          (
          <Header onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />,
          props.children,
          <Footer/>
           ) :
          props.children
        } */}

      </div>
    </div>
  );
};

export default Layout;