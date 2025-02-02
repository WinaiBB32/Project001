import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarTop from "./layouts/navbars/NavbarTop";
import Sidebar from "./layouts/sidebar/Sidebar";
import Footers from "./layouts/Footer/Footers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
        <div className="navbar">
          <NavbarTop />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">{children}</div>
        <div className="footer">
          <Footers />
        </div>
      </div>
      </body>
    </html>
  );
}
