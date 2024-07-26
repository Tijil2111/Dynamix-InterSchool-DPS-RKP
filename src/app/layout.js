import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../../Components/Header/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "LifeLift",
  description: "Empowering Seniors, Enhancing Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
