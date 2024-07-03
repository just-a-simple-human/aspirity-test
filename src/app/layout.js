import { Open_Sans } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/app-header";

const font = Open_Sans({ subsets: ["cyrillic"], style: 'normal', display: 'swap', weight: ['300', '400', '500', '600', '700', '800'], variable: "--font-poppins"});

export const metadata = {
  title: "Aspirity personal account",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.variable} font-sans`}>
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
