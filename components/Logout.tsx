import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await auth.api.signOut({
            headers: await headers(),
          });
          redirect("/");
        }}
      >
        <Button type="submit" variant="destructive">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Logout;
