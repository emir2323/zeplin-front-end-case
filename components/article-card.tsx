import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, File, Users } from "lucide-react";

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
        <div className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-sm border border-stroke/20 transition-all duration-300 hover:shadow-md w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-3 flex-1">
                {/* Header: Badge & Type */}
                <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="default" className="bg-primary-dark hover:bg-primary-dark/90 text-white px-3 py-1">
                        {category}
                    </Badge>
                    <span className="text-xs font-medium text-gray-scale">{articleType}</span>
                </div>

                {/* Title */}
                <h3 className="text-h6 md:text-h5 font-bold text-dark group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-scale">
                    <div className="flex items-center gap-1.5">
                        <FileText size={16} className="text-gray-400" />
                        <span className="font-medium">Sayfa: {pageRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-gray-400" />
                        <span className="font-medium">{authors.join(", ")}</span>
                    </div>
                </div>
            </div>

            {/* Right Content: Actions */}
            <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-stroke/10 justify-end md:justify-start">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 text-gray-scale rounded-full border-stroke hover:text-primary hover:border-primary hover:bg-sky-light/20"
                >
                    <File size={18} />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 text-gray-scale rounded-full border-stroke hover:text-primary hover:border-primary hover:bg-sky-light/20"
                >
                    <Download size={18} />
                </Button>
                <Button
                    className="rounded-full bg-primary hover:bg-primary-dark text-white gap-2 px-6 shadow-md hover:shadow-lg transition-all"
                >
                    <Eye size={18} />
                    <span>Görüntüle</span>
                </Button>
            </div>
        </div>
    );
}
