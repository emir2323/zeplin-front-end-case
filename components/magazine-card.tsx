import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, ArrowRight, BookOpen, FileText, Calendar } from "lucide-react";

interface MagazineCardProps {
    title: string;
    volume: number;
    issue: number;
    date: string;
    coverImage: string;
    isNew?: boolean;
    isLatest?: boolean;
}

export function MagazineCard({
    title,
    volume,
    issue,
    date,
    coverImage,
    isNew,
    isLatest,
}: MagazineCardProps) {
    return (
        <div className="group relative flex flex-col md:flex-row overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-stroke/20 w-full max-w-sm md:max-w-md gap-0 md:gap-4">
            {/* Cover Image Area */}
            <div className="relative h-64 md:h-auto w-full md:w-48 md:min-w-[12rem] bg-gray-100 overflow-hidden shrink-0">
                <img
                    src={coverImage}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Labels and Badge */}
            {isLatest && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#D80027] text-white text-[10px] font-bold py-3 px-1.5 rounded-r-md shadow-lg flex items-center justify-center [writing-mode:vertical-rl] rotate-180 tracking-[0.1em]">
                    SON SAYI
                </div>
            )}

            {isNew && (
                <div className="absolute top-4 right-4 z-30">
                    <Badge variant="outline" className="bg-[#00C4CC] text-white border-none px-2 py-0.5 text-[10px] font-bold shadow-md">
                        YENİ
                    </Badge>
                </div>
            )}

            {/* Content Area */}
            <div className="flex flex-col p-5 flex-1 h-full min-h-[220px]">
                {/* Header: PDF Icon and Magazine Badge */}
                <div className="flex flex-col gap-1.5 mb-4">
                    <FileText size={20} className="text-gray-400 stroke-1" />
                    <Badge variant="outline" className="bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-semibold px-2.5 py-0.5 rounded border-none w-fit uppercase tracking-tight shadow-sm">
                        Dergi
                    </Badge>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-slate-900 line-clamp-2 leading-[1.3] mb-3 group-hover:text-brand-primary transition-colors">
                    {title}
                </h3>

                {/* Meta Info: Volume and Issue - Now below Title */}
                <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-500 mb-2">
                    <div className="flex items-center gap-1.5">
                        <BookOpen size={14} className="text-slate-400" />
                        <span>Cilt: {volume}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FileText size={14} className="text-slate-400" />
                        <span>Sayı: {issue}</span>
                    </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-[12px] text-slate-400 font-medium mb-6">
                    <Calendar size={13} />
                    <span>{date}</span>
                </div>

                {/* Actions: Align to bottom with mt-auto */}
                <div className="flex items-center justify-end gap-3 mt-auto">
                    <Button
                        size="icon"
                        className="h-9 w-9 rounded-full bg-[#1E2756] hover:bg-[#0F172A] text-white shadow-md transition-all shrink-0"
                        title="Görüntüle"
                    >
                        <Eye size={18} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 rounded-full border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-100 transition-all shrink-0 shadow-sm"
                        title="İndir"
                    >
                        <Download size={18} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9 rounded-full border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-100 transition-all shrink-0 shadow-sm"
                        title="Detay"
                    >
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
