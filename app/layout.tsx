import "./globals.scss";
import type { Metadata } from "next";

import Favicon from "@oslokommune/punkt-assets/dist/logos/favicon.ico";
import Shortcut from "@oslokommune/punkt-assets/dist/logos/16x16-favicon.png";
import Apple from "@oslokommune/punkt-assets/dist/logos/apple-touch-icon.png";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tester NextJS",
  description: "Beskrivelse av testing av NextJS",
  icons: {
    icon: Favicon.src,
    shortcut: Shortcut.src,
    apple: Apple.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="tw-flex tw-flex-col tw-min-h-screen tw-justify-between">
        <Header />
        <main className="tw-my-0 tw-mx-auto tw-pt-24 tw-pb-16 tablet:tw-pt-28 tablet:tw-px-8 laptop:tw-pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
