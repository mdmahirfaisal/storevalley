"use client";

import React from "react";
import { ModeToggle } from "../theme_toggle";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { BadgeCheck, LayoutDashboard, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

export default function NavigationBar() {
  const start = (
    <Link href={"/"}>
      <div className="flex gap-1 items-center cursor-pointer">
        <Image
          height={35}
          width={35}
          alt="logo"
          src="/globe.svg"
          className="mr-2 bg-white rounded-full"
        />
        <h1 className="text-xl font-semibold">Store Valley</h1>
      </div>
    </Link>
  );

  const end = (
    <div className="flex gap-3 items-center">
      <Button variant="ghost">
        <ModeToggle />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 items-center cursor-pointer">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <i className="truncate text-xs">{"rjmahir.faisal@gmail.com"}</i>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={"https://storevalley.vercel.app/faisal.jpg"}
                alt={"Faisal"}
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={"bottom"}
          align="center"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={"https://storevalley.vercel.app/faisal.jpg"}
                  alt={"Faisal"}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{"Faisal"}</span>
                <span className="truncate text-xs">
                  {"rjmahir.faisal@gmail.com"}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheck />
              Account
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LayoutDashboard />
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
  return (
    <Card className="fixed w-full h-14 flex items-center justify-between px-4 !rounded-none">
      <div>{start}</div>
      <div>{end}</div>
    </Card>
  );
}
