import { Work_Sans } from "next/font/google";
import './global.scss';

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "The Box",
  description: "Construction agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
