"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { blogPosts, getPostBySlug, getRelatedPosts } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, 3);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="pt-32 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-text-muted mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/blog" className="text-primary-light hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary-light mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-sm font-semibold text-primary-light mb-6">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"

                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-text-dim text-sm">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-text-dim">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto"

            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-12 mb-6">
                    {line.replace("# ", "")}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-8 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={index} className="text-text-muted ml-4 mb-2">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (
                line.startsWith("1. ") ||
                line.startsWith("2. ") ||
                line.startsWith("3. ")
              ) {
                return (
                  <li
                    key={index}
                    className="text-text-muted ml-4 mb-2 list-decimal"
                  >
                    {line.replace(/^\d+\. /, "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-text-muted mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  isLiked
                    ? "bg-red-500/20 border-red-500 text-red-400"
                    : "bg-bg-light border-white/10 text-text-muted hover:border-primary/50"
                }`}
              >
                <ThumbsUp
                  className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                />
                {isLiked ? likes + 1 : likes}
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  isSaved
                    ? "bg-primary/20 border-primary text-primary-light"
                    : "bg-bg-light border-white/10 text-text-muted hover:border-primary/50"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                />
                {isSaved ? "Saved" : "Save"}
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-text-muted hover:border-primary/50 transition-all">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-primary-light" />
              <h2 className="text-2xl font-bold">Related Articles</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-background border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"

                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary-light font-medium mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary-light transition-colors">
                        {relatedPost.title}
                      </h3>
                      <span className="flex items-center gap-1 text-text-dim text-sm">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are building their financial future
              with TradePro. Get funded today and keep up to 90% of your
              profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-lg font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all text-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
