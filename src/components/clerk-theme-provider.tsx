/** @format */

"use client";

import { dark, neobrutalism } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function ClerkThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    // 监听主题变化
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "dark" | "light");
    }

    // 添加主题变化监听器
    const observer = new MutationObserver(() => {
      const newTheme = localStorage.getItem("theme");
      if (newTheme) {
        setTheme(newTheme as "dark" | "light");
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? [dark] : [neobrutalism],
      }}
    >
      {children}
    </ClerkProvider>
  );
}
