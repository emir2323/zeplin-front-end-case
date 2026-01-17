"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Search, Menu, Calculator, BookOpen, Users, PenLine, Home, SquarePen, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm z-[60] relative">
            {/* 1. Mavi Logo Alanı (Şekil Revizesi) - EN ÜST KATMAN */}
            {/* 1. Mavi Logo Alanı (Şekil Revizesi) - Desktop Only */}
            <div className="hidden lg:flex absolute left-0 top-0 h-full w-[380px] md:w-[400px] bg-[#273D89] rounded-br-[100px] md:rounded-br-[120px] z-[50] items-center justify-center shadow-[6px_4px_15px_rgba(0,0,0,0.1)] border-r-[6px] border-white transition-all">
                <Link href="/" className="flex items-center gap-4 group">
                    {/* Logo Görseli */}
                    <div className="relative h-12 md:h-14 flex items-center">
                        <img
                            src="/images/logo-white.svg"
                            alt="profuture logo"
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                                (e.target as any).style.display = 'none';
                                (e.target as any).nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden text-3xl font-bold text-white tracking-tight">profuture</span>
                    </div>
                </Link>
            </div>

            {/* 2. Üst Bilgi Çubuğu (Top Bar) - Arka Plan Siyah, justify-between */}
            {/* 2. Üst Bilgi Çubuğu (Top Bar) - Desktop Only for full detail, hidden on mobile */}
            <div className="hidden lg:flex bg-[#273D89] text-gray-300 h-10 md:h-12 pr-8 pl-[400px] md:pl-[420px] justify-between items-center font-medium relative z-[40]">
                {/* Email - Logo bitişinde başlar */}
                <div className="flex items-center gap-2">
                    <Mail size={14} className="opacity-70" />
                    <span className="text-[11px] md:text-xs opacity-80 leading-none">profuture@gmail.com</span>
                </div>

                {/* ISSN ve Bilgiler - En sağda */}
                <div className="flex items-center gap-6 text-[11px] md:text-xs text-right whitespace-nowrap">
                    <span className="opacity-70">ISSN: <span className="font-bold text-white">345-255</span></span>
                    <span className="hidden sm:inline opacity-70">Başlangıç: <span className="font-bold text-white">2025</span></span>
                    <span className="hidden sm:inline opacity-70">Periyot: <span className="font-bold text-white">Yılda 2 Sayı</span></span>
                </div>
            </div>

            {/* 3. Navigasyon Barı (Beyaz Alan) */}
            {/* 3. Navigasyon Barı (Beyaz Alan) */}
            <div className="relative h-[70px] md:h-[85px] w-full flex items-center bg-[#273D89] lg:bg-white px-4 lg:pr-12 lg:pl-[420px] z-[30]">
                <div className="flex items-center w-full h-full">
                    {/* Home Icon - Fixed on the left */}
                    {/* Mobile Logo - Visible only clearly on mobile */}
                    <div className="lg:hidden flex items-center">
                        <img src="/images/logo-white.svg" alt="Profuture" className="h-8 w-auto" />
                    </div>

                    {/* Home Icon - Desktop Only */}
                    <Link href="/" className="hidden lg:block text-[#A8B95E] hover:opacity-80 transition-opacity shrink-0">
                        <Home size={24} strokeWidth={2.5} />
                    </Link>

                    {/* Navigation - Centered horizontally */}
                    <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-[14px] font-semibold text-[#273D89]">
                        <Link href="#" className="hover:text-red-600 transition-all whitespace-nowrap">
                            Amaç ve Kapsam
                        </Link>
                        <Link href="#" className="hover:text-red-600 transition-all whitespace-nowrap">
                            Etik İlkeler ve Yayın Politikası
                        </Link>
                        <Link href="#" className="hover:text-red-600 transition-all whitespace-nowrap">
                            Makale Çağrıları
                        </Link>
                        <Link href="#" className="hover:text-red-600 transition-all whitespace-nowrap">
                            Sayılar
                        </Link>
                        <Link href="#" className="hover:text-red-600 transition-all whitespace-nowrap">
                            İletişim
                        </Link>
                    </nav>

                    {/* Aksiyon Butonları */}
                    {/* Aksiyon Butonları - Desktop Only */}
                    <div className="hidden lg:flex items-center gap-4 ml-auto">
                        <Button className="bg-[#273D89] hover:bg-[#1E293B] text-white rounded-2xl px-6 font-bold text-[13px] h-11 shadow-md transition-all gap-2.5">
                            <Users size={18} />
                            Dergi Kurulu
                        </Button>
                        <Button className="bg-[#A8B95E] hover:bg-[#2A2C31] text-brand-primary hover:text-white rounded-2xl px-6 font-bold text-[13px] h-11 shadow-md transition-all gap-2.5 border-none">
                            <SquarePen size={18} />
                            Yazar Rehberi
                        </Button>
                        <button className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-slate-50 transition-all shadow-sm">
                            <Search size={22} />
                        </button>
                    </div>

                    {/* Mobil Menü Butonu */}
                    <button
                        className="lg:hidden p-2 text-white ml-auto relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col gap-4 lg:hidden z-50">
                    <nav className="flex flex-col gap-3">
                        <Link href="#" className="py-2 text-[#273D89] font-semibold hover:text-[#D80027]">Amaç ve Kapsam</Link>
                        <Link href="#" className="py-2 text-[#273D89] font-semibold hover:text-[#D80027]">Etik İlkeler ve Yayın Politikası</Link>
                        <Link href="#" className="py-2 text-[#273D89] font-semibold hover:text-[#D80027]">Makale Çağrıları</Link>
                        <Link href="#" className="py-2 text-[#273D89] font-semibold hover:text-[#D80027]">Sayılar</Link>
                        <Link href="#" className="py-2 text-[#273D89] font-semibold hover:text-[#D80027]">İletişim</Link>
                    </nav>
                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <Mail size={16} /> profuture@gmail.com
                        </div>
                        <Button className="w-full bg-[#273D89] text-white">Dergi Kurulu</Button>
                        <Button className="w-full bg-[#A8B95E] text-white">Yazar Rehberi</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
