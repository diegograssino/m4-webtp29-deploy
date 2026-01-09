import AuthProvider from "@/contexts/AuthContext";
import CartProvider from "@/contexts/CartContext";
import Footer from "@/ui/components/Footer/Footer";
import Navbar from "@/ui/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Aleo, Archivo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";

const primaryFont = Archivo({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const secondaryFont = Aleo({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Phone Commerce",
  description: "Phone Commerce is a platform for buying and selling phones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="container">{children}</main>
            <Footer />
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
