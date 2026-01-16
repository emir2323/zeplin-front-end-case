import { Header } from "@/components/layout/header";
import { MagazineCard } from "@/components/magazine-card";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#001542] text-white overflow-hidden">
        {/* Background pattern overlay (optional) */}
        <div className="absolute inset-x-0 top-0 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Profuture Teknoloji Dergisi <br />
              <span className="text-[#A5E05E]">Son Sayı Yayında</span>
            </h1>
            <p className="text-gray-300 max-w-lg leading-relaxed">
              Profuture Teknoloji Dergisi; akademisyenleri, araştırmacıları ve profesyonelleri bir araya getiren bağımsız, uluslararası hakemli bir dergidir.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1">Cilt: 2</span>
              <span className="flex items-center gap-1">Sayı: 1</span>
              <span className="flex items-center gap-1">Haziran 2023</span>
            </div>

            <Button className="bg-[#273D80] hover:bg-[#344e9e] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
              Dergi Görüntüle <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - 3D Magazine Placeholder */}
          <div className="flex-1 flex justify-center md:justify-end z-10 relative">
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl skew-y-6 transform rotate-6 flex items-center justify-center group hover:skew-y-0 hover:rotate-0 transition-all duration-500">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold">P</span>
                </div>
                <h3 className="font-bold text-xl">Profuture</h3>
                <p className="text-sm opacity-80 mt-2">Teknoloji ve Dijital</p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#A5E05E] rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#D93D75] rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Dergi Amacı ve Kapsamı</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#001542] mt-2 mb-4">Profuture Teknoloji Dergisi</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Profuture Teknoloji Dergisi; 2022 yılında yayın hayatına başlayan, teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri alanlarında özgün, bilimsel ve mühendislik verileri olanlarını bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
          </p>
          <Button variant="outline" className="rounded-full border-gray-300 text-gray-600 hover:text-primary hover:border-primary">
            Detay <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Magazines List */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-sm text-gray-500">Sayılar</span>
            <h2 className="text-2xl font-bold text-[#001542]">Dergiler</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"><ChevronRight size={16} /></button>
            <Button variant="ghost" className="text-xs text-gray-500">Tümünü Görüntüle <ArrowRight size={14} className="ml-1" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="https://images.unsplash.com/photo-1627398242454-45a1465c2b39?auto=format&fit=crop&q=80&w=600"
            isNew={true}
          />
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
          />
          <MagazineCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            coverImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
          />
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-100 to-sky-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full md:h-[300px]">
          {/* Visuals - Abstract Cards */}
          <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 w-64 h-full opacity-80">
            <div className="absolute top-10 left-0 w-32 h-40 bg-white shadow-lg rounded-lg -rotate-12 transform border border-blue-200"></div>
            <div className="absolute top-4 left-16 w-32 h-40 bg-white shadow-lg rounded-lg rotate-6 transform z-10 border border-blue-200"></div>
          </div>

          <div className="flex-1 md:ml-64 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 text-red-500 font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="uppercase text-xs tracking-widest">Makale Çağrısı</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#001542] mb-4">Türkiye Ulusal Dijital Veri ve Altyapıları</h3>
            <p className="text-gray-600 text-sm max-w-lg mb-6 mx-auto md:mx-0">
              Bu özel sayımızda ulusal ölçekli dijital verilerin kullanımı, korunması ve açık kaynak stratejileri ele alınıyor.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              Makale Gönder <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-1/3 h-48 md:h-full rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001542]/80 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs opacity-80">Bilgi ve Teknoloji</span>
              <span className="font-bold">Araştırmaları</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-sm text-gray-500">Profuture Teknoloji Dergisi</span>
            <h2 className="text-2xl font-bold text-red-600">Güncel Yazılar</h2>
          </div>
          <Button variant="ghost" className="text-xs text-gray-500">Tümünü Görüntüle <ArrowRight size={14} className="ml-1" /></Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Magazine Cover */}
          <div className="lg:w-1/3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-[#001542] group">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-10 left-0 w-full p-6 text-white">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">Son Sayı</div>
                <h3 className="text-3xl font-bold mb-2">VERİ ODAKLI MEKANİZMALAR</h3>
                <p className="text-sm opacity-80">07. Sayı</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <Button className="flex-1 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">
                <Download size={16} className="mr-2" /> İndir
              </Button>
              <Button className="flex-1 bg-[#273D80] text-white hover:bg-[#1f3066] shadow-sm">
                Görüntüle
              </Button>
            </div>
          </div>

          {/* Right: Article List */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {[1, 2, 3, 4].map((item) => (
              <ArticleCard
                key={item}
                category="Bilim"
                articleType="Araştırma Makalesi"
                title="Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi"
                pageRange="12-28"
                authors={["Elif Başkaya Acar", "Emre Torun", "Halil Başar"]}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
