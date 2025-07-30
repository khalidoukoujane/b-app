import { Poppins, Mona_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const mona_sans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-monasans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${mona_sans.variable} bg-slate-50`}>
		<Navbar/>
        {children}
      </body>
    </html>
  );
}
