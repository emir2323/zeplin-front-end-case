import { Mail, MapPin, User, Info } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white mt-24">
            <div className="container mx-auto px-4">
                {/* Upper Section: Info Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-10">

                    {/* Column 1: Editor */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-brand-text-light shrink-0">
                            <User size={24} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-text-light text-xs uppercase tracking-widest mb-1">Dergi Editörü</span>
                            <h3 className="text-white font-bold text-lg mb-2">Prof. Dr. Elif Başkaya Acar</h3>
                            <div className="flex items-center gap-2 text-brand-text-light text-sm">
                                <Mail size={14} className="text-brand-red" />
                                <span>elif@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Mail */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-brand-text-light shrink-0">
                            <Mail size={24} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-text-light text-xs uppercase tracking-widest mb-1">Mail Adresi</span>
                            <h3 className="text-white font-bold text-lg">profuture@gmail.com</h3>
                        </div>
                    </div>

                    {/* Column 3: Address */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-brand-text-light shrink-0">
                            <MapPin size={24} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-text-light text-xs uppercase tracking-widest mb-1">Profuture Teknoloji Yayınevi</span>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                                Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
                            </p>
                        </div>
                    </div>

                </div>

                {/* Middle Section: Disclaimer */}
                <div className="border-t border-gray-800/50 pt-6 pb-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-brand-text-light text-[11px] md:text-xs italic leading-relaxed px-4">
                            "Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz.
                            Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin
                            kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar,
                            bu şartları okumuş, anlamış ve kabul etmiş sayılır."
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright */}
            <div className="w-full bg-[#D80027] py-2.5">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-white text-[11px] md:text-xs font-medium tracking-wide">
                        Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
