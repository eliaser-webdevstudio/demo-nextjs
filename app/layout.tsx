import type { Metadata } from "next";
import "@fontsource/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradePro - Premium Prop Trading Firm",
  description:
    "Trade with up to $200K in prop firm capital. Keep up to 90% of your profits with zero risk to your personal funds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}