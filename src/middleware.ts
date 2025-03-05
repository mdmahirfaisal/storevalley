import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/user-profile"]);
const isPublickRoute = createRouteMatcher([
  "/(.*)",
  "/sign-up(.*)",
  "/sign-in(.*)",
  "/user-profile(.*)",
]);
// const isAdminRoute = createRouteMatcher(["/dashboard/admin(.*)"]);

export default clerkMiddleware(
  async (auth, request) => {
    const { userId, redirectToSignIn } = await auth();

    if (!isPublickRoute(request)) {
      if (!userId && !isPublickRoute(request)) {
        // custom logic for redirecting

        return redirectToSignIn();
      }
    }
  }
  // { debug: true }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
