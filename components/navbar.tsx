import { BadgePercentIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href="/" className="flex items-center gap-2">
          <BadgePercentIcon className="h-6 w-6" />
          <span className="font-bold">Setup with react</span>
        </Link>
        <div>
          <Link href="/sign-in">
            <Button className={buttonVariants()}>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
