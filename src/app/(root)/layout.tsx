import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/global.css";
import NavigationBar from "@/components/navigationBar/navbar";
import { ThemeProvider } from "@/components/theme_provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Ecommerce App",
  description: "My Ecommerce App built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the theme from cookies, default to 'lara-light-blue' if not set
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "lara-light-blue";
  const themePath = `/themes/${theme}/theme.css`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme link with a fixed ID for dynamic switching */}
        <link id="theme-link" rel="stylesheet" href={themePath} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
