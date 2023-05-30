import { Jost } from "next/font/google";
import Container from "./components/Container";
import Navigator from "./components/Navigator";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Designo: Award-winning custom designs and digital branding solutions",
  description:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navigator />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
