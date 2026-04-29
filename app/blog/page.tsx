import type { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights, trading strategies, and prop firm tips to help you succeed in the markets.",
};

export default function Blog() {
  return <BlogPage />;
}
