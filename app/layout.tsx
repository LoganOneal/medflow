import "./globals.css";
import { Public_Sans } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Navbar } from "@/components/Navbar";
import UserNav from "@/components/UserNav";
import TeamSwitcher from "@/components/team-switcher";
import Image from "next/image";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Medchat</title>
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
        <body className="bg-slate-100">
          <div className="flex flex-col md:px-12 h-screen bg-slate-100">
            <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <Image src="/images/medchat_logo_transparent.png" width={200} height={150} alt="logo" className="pr-5 ml-6"></Image>
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
