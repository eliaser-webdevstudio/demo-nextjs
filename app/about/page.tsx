import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TradePro mission, values, and the team behind the leading prop trading firm.",
};

export default function About() {
  return <AboutPage />;
}
