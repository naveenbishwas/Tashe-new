import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DEVKINANDAN STEEL & METAL INDUSTRIES LLP",
  description:
    "At DEVKINANDAN STEEL & METAL INDUSTRIES LLP, we provide high-quality steel and metal solutions for projects that are strong, resilient, and built to last. Build your dreams with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
