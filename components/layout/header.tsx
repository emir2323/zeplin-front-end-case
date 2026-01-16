import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Search, Globe, LogIn, Menu } from "lucide-react";

export function Header() {
    return (
        <header className="w-full bg-white shadow-sm z-50">
            {/* Top Bar - Dark Blue */}
            <div className="bg-[#001542] text-white text-[10px] md:text-xs py-2 px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Mail size={12} />
                    <span>profuture@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 opacity-90">
                    <span>ISSN: 345-255</span>
                    <span className="hidden md:inline">Uygulama: 2023</span>
                    <span className="hidden md:inline">Periyod: Yılda 2 Sayı</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#001542] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        P
                    </div>
                    <span className="text-xl font-bold text-[#001542]">profuture</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-primary transition-colors">Anasayfa</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Hakkımızda</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Makaleler</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Arşiv</Link>
                    <Link href="#" className="hover:text-primary transition-colors">İletişim</Link>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button size="sm" className="bg-[#273D80] hover:bg-[#1f3066] text-white rounded-full px-4">
                        Dergi Kurulu
                    </Button>
                    <Button size="sm" className="bg-[#A5E05E] hover:bg-[#94cd50] text-[#001542] rounded-full px-4 font-semibold">
                        Yazar Rehberi
                    </Button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                        <Search size={18} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                        <Globe size={18} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                        <LogIn size={18} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
}
