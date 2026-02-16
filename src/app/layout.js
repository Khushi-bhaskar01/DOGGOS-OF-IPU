
import { Poppins, Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Doggos of IPU 🐶",
  description: "Official website for Doggos of IPU",
  icons: {
    icon: "/favicon.png",
  },
  verification:{
    google: "mpN46EYhcJ_3hH5G3ttDWSFaxSB_-_nsPfXUO-RX6hQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={`${poppins.className} ${inter.variable}`}>

        {children}
      </body>
    </html>
  );
}
