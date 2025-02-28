"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "../theme_toggle";

interface NavTypes {
  label: string;
  icon: string;
  link: string;
  template: any;
}

export default function NavigationBar() {
  const itemRenderer = (item: NavTypes) => (
    <Link href={item.link} className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
    </Link>
  );
  const items: NavTypes[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      link: "/",
      template: itemRenderer,
    },
    {
      label: "Dashboard",
      icon: "pi pi-dashboard",
      link: "/dashboard",
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      className="mr-2 h-10"
    ></img>
  );
  const end = (
    <div className="flex gap-3 items-center">
      <div>
        <ModeToggle />
      </div>
      <div>
        <img
          src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          className="w-10 "
          alt="avatar"
        />
      </div>
    </div>
  );
  return (
    <div className="h-14 flex items-center justify-between bg-gray-500">
      <div>{start}</div>
      <div>{end}</div>
    </div>
  );
}
