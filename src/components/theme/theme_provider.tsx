"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  console.log("client theme provider");
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
