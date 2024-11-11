import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/");
  }

  const user = session?.user;

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold underline">Welcome to the dashboard</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default DashboardPage;
