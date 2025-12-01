import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: number;
  title: string;
  category: string;
  price: string;
  author: string;
  image: string;
}

const categoryColors: Record<string, string> = {
  Marketing: "bg-category-marketing text-white",
  Management: "bg-category-management text-white",
  "HR & Recruiting": "bg-category-hr text-white",
  Design: "bg-category-design text-white",
  Development: "bg-category-development text-white",
};

export const CourseCard = ({ title, category, price, author, image }: CourseCardProps) => {
  return (
    <Card className="course-card overflow-hidden border-border bg-card group cursor-pointer shadow-md">
      <div className="aspect-[4/3] overflow-hidden yellow-gradient-bg relative">
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <img 
            src={image} 
            alt={title}
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 relative z-10"
          />
        </div>
      </div>
      <div className="p-5">
        <Badge className={`${categoryColors[category] || "bg-primary"} px-3 py-1 mb-3 text-xs font-medium`}>
          {category}
        </Badge>
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 leading-snug min-h-[3.5rem]">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-price-red font-bold text-base">{price}</span>
          <span className="text-muted-foreground">| by {author}</span>
        </div>
      </div>
    </Card>
  );
};
