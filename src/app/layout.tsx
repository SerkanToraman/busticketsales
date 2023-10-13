import { UserContextProvider } from "@/context/UserContext";
import { JourneyContextProvider } from "@/context/JourneyContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
import "../scss/style.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bus Ticket",
  description: "Bus Ticket Purchase App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <JourneyContextProvider>{children}</JourneyContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
