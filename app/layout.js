import localFont from "next/font/local";
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";
import Link from "next/link";

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`${fugaz.className} text-base sm:text-lg textGradient`}>
        Broodl
      </h1>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <Link href="" target="_blank">
        <p
          className={
            "text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500  " +
            fugaz.className
          }
        >
          Built by Nickoe 💛
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${openSans.className} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
