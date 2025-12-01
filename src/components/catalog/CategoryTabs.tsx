interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  courseCount: number;
}

export const CategoryTabs = ({ categories, activeCategory, onCategoryChange, courseCount }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-6 items-center text-base">
      <button
        onClick={() => onCategoryChange("All")}
        className={`filter-tab font-medium pb-2 ${
          activeCategory === "All" ? "filter-tab-active" : "text-muted-foreground"
        }`}
      >
        All <sup className="text-xs">{courseCount}</sup>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`filter-tab font-medium pb-2 ${
            activeCategory === category ? "filter-tab-active" : "text-muted-foreground"
          }`}
        >
          {category} <sup className="text-xs">6</sup>
        </button>
      ))}
    </div>
  );
};
