import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/global.css";
import NavigationBar from "@/components/navigationBar/navbar";
import { ThemeProvider } from "@/components/theme/theme_provider";
import { ClerkThemeProvider } from "@/components/theme/clerk_theme-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store Valley",
  description: "Store Valley an Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/globe.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        shortcut-listen="true"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkThemeProvider>
            <NavigationBar />
            <main className="pt-10">{children}</main>
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
