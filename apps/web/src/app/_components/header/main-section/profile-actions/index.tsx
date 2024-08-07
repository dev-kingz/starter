"use client";
import React from "react";
import {AuthModal} from "@/components/modals";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "@/store/slices/user.slice";
import {CiUser} from "react-icons/ci";
import {LogOut, Settings, User} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import Link from "next/link";

const ProfileActions = () => {
  const {status, user} = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("accessToken");
  }

  if (status === "pending") {
    return null;
  }

  if (status === "rejected") {
    return (
      <div className="ProfileActions flexi gap-x-2">
        <AuthModal
          defaultAction="login"
          triggerStyles="bg-transparent text-foreground w-full hidden sm:flex"
        />
        <AuthModal triggerStyles="w-full" />
      </div>
    );
  }

  if (status === "fulfilled" && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} rounded={"full"} className="h-auto p-2">
            <CiUser className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <p className="ppl">
              signed in as:
              <br /> <strong className="font-medium">{user.email}</strong>
            </p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <Link href="/dashboard">
              <DropdownMenuItem>
                <MdOutlineSpaceDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/settings">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
};

export default ProfileActions;
