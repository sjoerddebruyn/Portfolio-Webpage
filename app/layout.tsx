import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer2 } from "@/components/footer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sjoerd De Bruyn | Portfolio",
  description: "Portfolio of Sjoerd De Bruyn, full-stack web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* ============================================ */}
          {/* HEADER SECTION - Navigation Bar (Global) */}
          {/* ============================================ */}
          <nav className="border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className="text-lg font-semibold"
                    >
                      Sjoerd De Bruyn | Portfolio
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[200px]">
                        <NavigationMenuLink href="/about">
                          About Me
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/experience">
                          Experience
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/projects">
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/contact">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>

          {/* ============================================ */}
          {/* MAIN CONTENT (Per-page) */}
          {/* ============================================ */}
          <div className="flex-1">{children}</div>

          {/* ============================================ */}
          {/* FOOTER SECTION (Global) */}
          {/* ============================================ */}
          <Footer2
            logo={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
              alt: "Sjoerd De Bruyn Portfolio",
              title: "Sjoerd De Bruyn",
              url: "/",
            }}
            tagline="Full Stack Developer & Creative Problem Solver"
            menuItems={[
              {
                title: "Navigation",
                links: [
                  { text: "About", url: "/about" },
                  { text: "Projects", url: "/projects" },
                  { text: "Contact", url: "/contact" },
                ],
              },
              {
                title: "Social",
                links: [
                  { text: "LinkedIn", url: "#" },
                  { text: "GitHub", url: "#" },
                  { text: "Twitter", url: "#" },
                ],
              },
            ]}
            copyright="© 2025 Sjoerd De Bruyn. All rights reserved."
            bottomLinks={[
              { text: "Terms and Conditions", url: "#" },
              { text: "Privacy Policy", url: "#" },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
