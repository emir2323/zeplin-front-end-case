"use client";

import { Header } from "@/components/layout/header";
import { MagazineCard } from "@/components/magazine-card";
import { ArticleCard } from "@/components/article-card";
import { CallForPapers } from "@/components/call-for-papers";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Download, Calendar, BookOpen, Eye } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#1a237e] text-white overflow-visible pb-20 md:pb-0 z-0">
        {/* Background Image / Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="World Map Texture"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e] via-[#1a237e]/90 to-transparent opacity-90 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 pt-12 md:pt-20 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 pt-10 pb-10 md:pb-32 relative z-10">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                Profuture Teknoloji Dergisi <br />
                <span className="text-white">Son Sayı Yayında</span>
              </h1>
              <p className="text-gray-300 max-w-lg leading-relaxed">
                Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Calendar size={16} />Cilt: 2</span>
                <span className="flex items-center gap-1"><BookOpen size={16} />Sayı: 7</span>
                <span className="flex items-center gap-1">Haziran 2025</span>
              </div>

              <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                Dergiyi Görüntüle <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - 3D Magazine Image */}
            <div className="relative flex justify-center md:justify-end z-20 pointer-events-none">
              {/* 
                   Negative margin increased significantly to overlap the next section.
                   Added rotation and scaling to match the screenshot "floating" look.
                */}
              <div className="relative w-full max-w-2xl transform md:translate-y-40 md:-mb-80 md:rotate-[-12deg] transition-transform duration-500">
                <img
                  src="/hero-magazine-3d.png"
                  alt="Profuture Dergisi Son Sayı"
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text Content - Left Aligned to avoid overlapping the magazine on the right */}
          <div className="space-y-6">
            <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider block">Dergi Amacı ve Kapsamı</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Profuture Teknoloji Dergisi</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
            </p>
            <Button variant="outline" className="rounded-full border-gray-300 text-slate-600 hover:text-brand-primary hover:border-brand-primary px-8 py-2">
              Detay <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Empty Right Column - Reserved for the overlapping magazine */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Magazines List */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Sayılar</span>
              <h2 className="text-4xl font-bold text-slate-900">Dergiler</h2>
            </div>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-[18px] bg-[#E8EDF5] flex items-center justify-center text-[#94A3B8] transition-all cursor-default opacity-80">
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <button className="w-12 h-12 rounded-[18px] bg-[#EEF2FF] flex items-center justify-center text-[#0F172A] hover:bg-blue-100 transition-all">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-300 rounded-full px-5 py-2 text-xs md:text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-brand-primary transition-all flex items-center gap-2">
              Tümünü Görüntüle
              <ArrowRight size={16} />
            </button>          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="/magazine-cover-full.jpg"
            isNew={true}
          />
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="/magazine-cover-full.jpg"
            isNew={true}
          />
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="/magazine-cover-full.jpg"
            isNew={true}
            isLatest={true}
          />
        </div>
      </section>

      <CallForPapers />

      {/* Recent Articles */}
      {/* Recent Articles */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Latest Magazine Cover Card */}
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 h-fit">
            <div className="relative mb-4">
              <img
                src="/images/latest-cover.jpg"
                alt="Son Sayı Kapak"
                className="w-full aspect-[3/4] object-cover rounded-xl"
                onError={(e) => {
                  (e.target as any).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800';
                }}
              />
              {/* Vertical Label - Centered Vertically & Fitted Box */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#D80027] text-white text-lg font-bold py-6 px-4 rounded-r-2xl shadow-[4px_0_15px_rgba(216,0,39,0.4)] [writing-mode:vertical-rl] rotate-180 tracking-wide">
                Son Sayı
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all shrink-0 shadow-sm" title="İndir">
                <Download size={18} />
              </button>
              <button className="flex-1 bg-[#1E2756] text-white h-10 rounded-full flex items-center justify-center gap-2 text-sm font-medium hover:bg-brand-primary transition-all shadow-md">
                <Eye size={18} />
                Görüntüle
              </button>
            </div>
          </div>

          {/* Right: Title group & Article List */}
          <div className="flex flex-col">
            <div className="flex justify-between items-end mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-slate-500 font-medium text-xs md:text-sm">Profuture Teknoloji Dergisi</span>
                <h2 className="text-3xl md:text-3xl font-bold text-[#D80027]">Güncel Yazılar</h2>
              </div>
              <button className="border border-gray-300 rounded-full px-5 py-2 text-xs md:text-sm font-medium text-slate-600 hover:bg-gray-50 transition-all">
                Tümünü Görüntüle
              </button>
            </div>

            <div className="flex flex-col">
              {[1, 2, 3, 4].map((item) => (
                <ArticleCard
                  key={item}
                  category="İklim"
                  articleType="Araştırma Makalesi"
                  title="Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi"
                  pageRange="12-28"
                  authors={["Elif Başkaya Acar", "Emre Taran", "Halil Başar"]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
