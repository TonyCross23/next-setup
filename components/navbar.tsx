import { BadgePercentIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemesToggle from "./Themes/ThemesToggle";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href="/" className="flex items-center gap-2">
          <BadgePercentIcon className="h-6 w-6" />
          <span className="font-bold">Setup with react</span>
        </Link>
        <div>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger>image</DropdownMenuTrigger>
              <DropdownMenuContent className="space-y-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemesToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Logout />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
