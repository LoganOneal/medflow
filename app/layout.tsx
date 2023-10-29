import "./globals.css";
import { Public_Sans } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Navbar } from "@/components/Navbar";
import UserNav from "@/components/UserNav";
import TeamSwitcher from "@/components/team-switcher";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>medchat</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Providing deeper insights for nurses and the relationships that they hold with patients."
        />
        <meta property="og:title" content="medchat" />
        <meta
          property="og:description"
          content="Providing deeper insights for nurses and the relationships that they hold with patients."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medflow" />
        <meta
          name="twitter:description"
          content="Providing deeper insights for nurses and the relationships that they hold with patients."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <UserProvider>
        <body className={publicSans.className}>
          <div className="flex flex-col p-4 md:p-12 h-[100vh]">
            <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher className="mr-4" />
              <Navbar className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>
            {children}
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
