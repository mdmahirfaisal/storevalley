// components/ClerkThemeProvider.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { ReactNode, useMemo } from "react";

export function ClerkThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  // Memoize the appearance object to avoid unnecessary re-renders
  const clerkAppearance = useMemo(
    () => ({
      baseTheme: resolvedTheme === "dark" ? dark : undefined,
    }),
    [resolvedTheme]
  );

  return <ClerkProvider appearance={clerkAppearance}>{children}</ClerkProvider>;
}
