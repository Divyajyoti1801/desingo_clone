import { Jost } from "next/font/google";
import Navigation from "./components/Navigation";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: `Designo: Award-winning custom designs and digital branding solutions`,
  description: `Founded in 2010, we are a creative agency that produces lasting results for our clients. 
  We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
  that make real impact. We’re always looking forward to creating brands, products, and 
  digital experiences that connect with our clients' audiences.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="px-[40px] md:px-[164px]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
