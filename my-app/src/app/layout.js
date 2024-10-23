import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Barber Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
