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
}

export function MagazineCard({
    title,
    volume,
    issue,
    date,
    coverImage,
    isNew,
}: MagazineCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-stroke/20 w-full max-w-sm">
            {/* Cover Image Area */}
            <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                <img
                    src={coverImage}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isNew && (
                    <div className="absolute top-4 right-4 z-10">
                        <Badge variant="default" className="bg-info text-white hover:bg-info/90 border-none px-3 py-1">
                            YENİ
                        </Badge>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-5">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-gray-scale">
                    <div className="flex items-center gap-1.5 bg-light px-2 py-1 rounded-md text-dark">
                        <BookOpen size={14} className="text-primary" />
                        <span>Cilt: {volume}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-light px-2 py-1 rounded-md text-dark">
                        <FileText size={14} className="text-secondary" />
                        <span>Sayı: {issue}</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-scale font-medium">
                    <Calendar size={14} />
                    <span>{date}</span>
                </div>

                {/* Title */}
                <h3 className="text-h4 font-bold text-primary-dark line-clamp-2 leading-tight min-h-[3.75rem]">
                    {title}
                </h3>

                {/* Actions */}
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-stroke/20">
                    <Button
                        size="icon"
                        className="h-10 w-10 rounded-full bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg transition-all"
                    >
                        <Eye size={18} />
                    </Button>

                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full border-stroke text-gray-scale hover:text-primary hover:border-primary hover:bg-sky-light/20 transition-all"
                        >
                            <Download size={18} />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full border-stroke text-gray-scale hover:text-primary hover:border-primary hover:bg-sky-light/20 transition-all"
                        >
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
