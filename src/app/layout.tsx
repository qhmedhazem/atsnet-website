import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/Toast/Toaster";
import Navbar from "@/components/Navigation/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import Footer from "@/components/Footer/Footer";

const alex = Alexandria({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Advanced Technology School In Nuclear Energy (ATSNET)",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alex.className}>
        {/* <Backdrop /> */}
        <ReactQueryProvider>
          <NextTopLoader color="var(--brand)" />
          <ModalWrapper />
          <Toaster />
          <div id="__next" className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
