'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { BLOGS_DATA } from '@/data/homepage';
import { Clock, Calendar, ArrowRight, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const BlogPreviewSection: React.FC = () => {
  const latestInsights = BLOGS_DATA.filter((item) => !item.isRead);
  const readInsights = BLOGS_DATA.filter((item) => item.isRead);

  const featuredArticle = latestInsights.find((item) => item.isFeatured) || latestInsights[0];
  const secondaryArticles = latestInsights.filter((item) => item.id !== featuredArticle?.id);

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/70">
      {/* Background Decorative Grid & Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

      <WebsiteContainer size="xl" className="relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>THOUGHT LEADERSHIP</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Latest Market Insights <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600">
                &amp; Executive Dispatches
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/resources/insights"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-900 shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all group"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 1. LATEST INSIGHTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* FEATURED INSIGHT CARD (7 cols on desktop) */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 border border-slate-200/90 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Decorative Subtle Financial SVG Chart in Background */}
              <svg className="absolute right-0 bottom-0 w-full h-48 pointer-events-none opacity-15 overflow-visible" viewBox="0 0 500 150">
                <motion.path
                  d="M 0 130 Q 120 100, 240 110 T 480 30"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>

              <div>
                {/* Top Metadata Row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                      {featuredArticle.category}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" /> Featured Advisory
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                {/* Main Article Title & Excerpt */}
                <Link href={`/resources/insights/${featuredArticle.id}`} className="group/title">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover/title:text-blue-600 transition-colors mb-3">
                    {featuredArticle.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl">
                  {featuredArticle.excerpt}
                </p>
              </div>

              {/* Author Footer & CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-extrabold shadow-md">
                    HA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{featuredArticle.author}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3" />
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/resources/insights/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all w-fit group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* SECONDARY ARTICLES (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/40 border border-slate-200/90 flex flex-col justify-between group transition-all duration-300 hover:border-blue-400 hover:shadow-xl h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/resources/insights/${article.id}`} className="group/stitle">
                    <h4 className="text-lg font-bold text-slate-900 group-hover/stitle:text-blue-600 transition-colors leading-snug mb-2">
                      {article.title}
                    </h4>
                  </Link>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-slate-700">{article.author}</span>
                  <Link
                    href={`/resources/insights/${article.id}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SECTION DIVIDER & R9 ARCHIVE / READ INSIGHTS */}
        {readInsights.length > 0 && (
          <div className="pt-10 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-200/70 text-slate-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight uppercase">
                    FROM THE R9 ARCHIVE
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Insights you&apos;ve already explored
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full w-fit">
                {readInsights.length} Explored Insights
              </span>
            </div>

            {/* COMPACT HORIZONTAL ROW CARDS FOR READ ARTICLES */}
            <div className="space-y-3">
              {readInsights.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-md group"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0 mt-0.5 sm:mt-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {article.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {article.date} · {article.readTime}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-0.5">
                        {article.title}
                      </h4>
                    </div>
                  </div>

                  <Link
                    href={`/resources/insights/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-blue-600 shrink-0 self-end sm:self-center"
                  >
                    <span>Read Again</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </WebsiteContainer>
    </section>
  );
};
