import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme/theme_provider";
import { AppSidebar } from "@/components/sideBar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/components/navigationBar/dashboardNavbar";
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
  title: "Admin Store Valley",
  description: "Store Valley Ecommerce App Admin Dashboard",
};

export default async function DashboardLayout({
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
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                {/* --- Dashboard top nav ---  */}
                <DashboardNavbar />

                <div>{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
