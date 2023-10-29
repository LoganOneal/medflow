import "./globals.css";
import { Public_Sans } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Navbar } from "@/components/Navbar";
import { UserNav } from "@/components/UserNav";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>LangChain + Next.js Template</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:title" content="LangChain + Next.js Template" />
        <meta
          property="og:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <UserProvider>
        <body className={publicSans.className}>
          <div className="flex flex-col p-4 md:p-12 h-[100vh]">
            <div className="border-b">
            <div className="flex h-16 items-center px-4">
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
