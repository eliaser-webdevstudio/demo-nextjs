import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TradePro. Our team of trading experts is ready to assist you 24/7.",
};

export default function Contact() {
  return <ContactPage />;
}
