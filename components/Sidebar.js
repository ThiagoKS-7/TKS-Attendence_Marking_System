
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import siteMetadata from "./siteMetadata";

const Sidebar = ({
  collapsed,
  shown,
  setCollapsed,
}) => {
  return (
    <div
      className={classNames({
        "bg-gray-700 text-zinc-300 dark:bg-slate-700 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all duration-1000 ease-out": true,
        "w-[330px]": !collapsed,
        "w-[90px]": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-sky-100 transition-none": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
          onClick={() => setCollapsed(!collapsed)}
        >
        <Logo width="80px" />
        {!collapsed && <span className="mt-5 ml-8 h-fit text-2xl font-semibold">{siteMetadata.headerTitle}</span>}
        </div>
        <div
          className={classNames({
            "grid place-content-stretch p-4 ": true,
          })}
        >
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
