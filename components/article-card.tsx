import { FileText, Download, Eye, File, Mail, Feather } from "lucide-react";

interface ArticleCardProps {
    category: string;
    articleType: string;
    title: string;
    pageRange: string;
    authors: string[];
}

export function ArticleCard({
    category,
    articleType,
    title,
    pageRange,
    authors,
}: ArticleCardProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm mb-4 last:mb-0 transition-all hover:shadow-md">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                {/* Left Area: Content */}
                <div className="flex-1 w-full">
                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                        <span className="bg-brand-primary text-white text-[13px] font-medium px-4 py-1.5 rounded-xl leading-none lowercase">
                            {category}
                        </span>
                        <span className="bg-[#F1F5F9] text-indigo-700 text-[13px] font-medium px-4 py-1.5 rounded-xl leading-none">
                            {articleType}
                        </span>
                    </div>

                    {/* Title with icon */}
                    <div className="flex items-start gap-2">
                        <FileText className="text-slate-400 mt-1 shrink-0" size={20} strokeWidth={1.5} />
                        <h3 className="text-slate-900 font-bold text-lg leading-tight">
                            {title}
                        </h3>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-slate-900 lg:text-slate-600 text-sm">
                        <div className="flex items-center gap-1.5 font-medium">
                            <File size={15} />
                            <span>Sayfa: {pageRange}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Feather size={15} />
                            <span className="line-clamp-1">{authors.join(", ")}</span>
                        </div>
                    </div>
                </div>

                {/* Right Area: Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all bg-white shadow-sm" title="E-Posta">
                        <Mail size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all bg-white shadow-sm" title="İndir">
                        <Download size={18} />
                    </button>
                    <button className="bg-[#1E2756] text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-brand-primary shadow-md transition-all">
                        <Eye size={18} />
                        <span>Görüntüle</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
