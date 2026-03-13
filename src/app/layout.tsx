import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duck U – Don’t Be Wack, Do Quack",
  description:
    "Turn Jeep ducking into a points-powered game. Scan QR duck stickers, earn bonuses, and climb weekly leaderboards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

