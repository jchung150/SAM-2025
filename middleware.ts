import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ko"],
  defaultLocale: "ko",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ko|en)/:path*"],
};
