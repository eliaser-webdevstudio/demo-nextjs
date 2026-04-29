"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Calendar, Clock, ArrowRight, BookOpen, BarChart3, Filter, ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { blogPosts, BlogPost } from "./data";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "All", icon: BarChart3 },
  { name: "Trading Guide", icon: BookOpen },
  { name: "Trading Strategies", icon: BarChart3 },
  { name: "Risk Management", icon: BarChart3 },
  { name: "Trading Psychology", icon: BarChart3 },
  { name: "Trading Tools", icon: BarChart3 },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article variants={itemVariants}
      className="group bg-bg-light border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <span className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-primary/90 rounded-full text-xs font-semibold text-white">{post.category}</span>
          <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-text-dim text-sm mb-3">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/>
              {new Date(post.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4"/>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary-light transition-colors">{post.title}</h3>
          <p className="text-text-muted text-sm line-clamp-2 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src={post.authorImage} alt={post.author} width={32} height={32} className="w-8 h-8 rounded-full object-cover"/>
              <span className="text-sm text-text-muted">{post.author}</span>
            </div>
            <span className="flex items-center gap-1 text-primary-light text-sm font-medium group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4"/></span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-8 bg-bg-light border border-white/10 rounded-3xl overflow-hidden mb-12">
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full text-xs font-semibold text-white">Featured Article</span>
          <span className="text-text-dim text-sm">{post.category}</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-text-muted mb-6 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={post.authorImage} alt={post.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
            <div><p className="font-medium">{post.author}</p><p className="text-text-dim text-sm">{post.readTime}</p></div>
          </div>
          <Link href={`/blog/${post.slug}`} className="px-6 py-3 bg-gradient-to-r from-primary to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all">Read Article</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts = blogPosts.filter((post) => {
    const ms = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const mc = selectedCategory === "All" || post.category === selectedCategory;
    return ms && mc && post !== featuredPost;
  }).slice(0, 6);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20"><div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our <span className="gradient-text">Blog</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">Expert insights, trading strategies, and prop firm tips.</p>
        </motion.div>
      </div></section>

      <section className="py-8 -mt-10 relative z-20"><div className="max-w-7xl mx-auto px-6">
        <div className="bg-bg-light border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
              <input type="text" placeholder="Search articles..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-background border border-white/10 rounded-xl text-white hover:border-primary/50 transition-all">
              <Filter className="w-5 h-5" />{selectedCategory}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>
          <AnimatePresence>
            {showFilters && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                  {categories.map((cat) => (
                    <button key={cat.name} onClick={() => { setSelectedCategory(cat.name); setShowFilters(false); }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.name ? "bg-primary text-white" : "bg-background text-text-muted hover:text-white border border-white/10"}`}>
                      <cat.icon className="w-4 h-4" />{cat.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div></section>

      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="py-12"><div className="max-w-7xl mx-auto px-6"><FeaturedPost post={featuredPost}/></div></section>
      )}

      <section className="py-12 pb-24"><div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (<BlogCard key={post.slug} post={post} />))}
        </motion.div>
        {filteredPosts.length === 0 && (
          <div className="text-center py-16"><BookOpen className="w-16 h-16 text-text-dim mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-text-muted">Try adjusting your search</p>
          </div>
        )}
      </div></section>

      <section className="py-24 relative overflow-hidden"><div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-text-muted mb-8">Get the latest trading insights delivered to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 bg-bg-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary" />
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white font-semibold hover:shadow-lg transition-all">Subscribe</button>
        </div>
      </div></section>
      <Footer />
    </main>
  );
}
