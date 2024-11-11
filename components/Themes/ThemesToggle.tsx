"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemesToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger value="light" onClick={(e) => setTheme("light")}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={(e) => setTheme("dark")}>
          <MoonIcon />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={(e) => setTheme("system")}>
          <DesktopIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemesToggle;
