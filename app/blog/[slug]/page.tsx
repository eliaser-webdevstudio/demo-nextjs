import type { Metadata } from "next";
import { getPostBySlug } from "../data";
import BlogPostPage from "./BlogPostPage";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: Props) {
  return <BlogPostPage params={params} />;
}
