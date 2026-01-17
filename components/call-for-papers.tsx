"use client";

import { Button } from "@/components/ui/button";
import { Megaphone, ArrowRight } from "lucide-react";

export function CallForPapers() {
    return (
        <section className="w-full py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 relative">

                {/* Background Layer (The Box) */}
                <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-[#E0F7FA] bg-[url('/images/banner-bg.png')] bg-cover bg-center shadow-2xl z-0">
                    {/* Subtle overlay to ensure text readability if background is complex */}
                    <div className="absolute inset-0 bg-white/10"></div>
                </div>

                {/* Content Layer (Overflows the box) */}
                <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:gap-0 items-center justify-between min-h-[400px]">

                    {/* Left Side: Enlarged Illustration - Anchored to Corner */}
                    <div className="w-full lg:w-[32%] flex justify-start items-end self-end order-2 lg:order-1">
                        <img
                            src="/images/banner-left.png"
                            alt="Makale Çağrısı İllüstrasyon"
                            className="w-full max-w-[300px] lg:max-w-[400px] mx-auto lg:mx-0 h-auto object-contain transform scale-110 lg:scale-125 origin-bottom-left -ml-2 -mb-2 lg:-ml-6 lg:-mb-1"
                            onError={(e) => {
                                (e.target as any).src = 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=400';
                                (e.target as any).className = "rounded-lg shadow-lg opacity-20 p-12";
                            }}
                        />
                    </div>

                    {/* Middle: Text and Action - Centered with margins */}
                    <div className="w-full lg:w-[36%] text-center flex flex-col items-center py-4 my-6 lg:my-0 lg:py-0 px-4 lg:px-8 order-1 lg:order-2">
                        {/* Label: Transparent Icon + Text */}
                        <div className="flex flex-col items-center gap-1 mb-6">
                            <Megaphone size={28} className="text-brand-red mb-1" />
                            <span className="text-brand-text-light font-medium uppercase tracking-widest text-[11px] md:text-xs">
                                Makale Çağrısı
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight mb-4">
                            Türkiye Ulusal Dijital Veri ve <br className="hidden lg:block" /> Altyapıları
                        </h2>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zeka uygulamaları gibi konular ele alınmaktadır.
                        </p>

                        <Button className="mt-8 bg-[#D80027] hover:bg-[#b91c1c] text-white rounded-full px-12 py-7 text-base md:text-lg font-bold shadow-2xl shadow-[#D80027]/20 hover:shadow-[#D80027]/40 hover:-translate-y-1 transition-all gap-3 border-none">
                            Makale Gönder
                            <ArrowRight size={22} />
                        </Button>
                    </div>

                    {/* Right Side: Poster - Popping out from the top */}
                    <div className="w-full lg:w-[32%] flex justify-center lg:justify-end pr-0 lg:pr-12 order-3">
                        <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30 transform hover:rotate-2 transition-transform duration-500">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/30 to-sky-400/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70"></div>
                            <img
                                src="/images/banner-right.png"
                                alt="Makale Çağrısı Poster"
                                className="relative w-full max-w-[300px] mx-auto lg:mx-0 lg:max-w-[340px] h-auto object-cover rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-4 border-white/20"
                                onError={(e) => {
                                    (e.target as any).src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400';
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
