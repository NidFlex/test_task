import { useState, useMemo } from "react";
import { CourseSearchBar } from "@/components/catalog/CourseSearchBar";
import { CategoryTabs } from "@/components/catalog/CategoryTabs";
import { CourseCard } from "@/components/catalog/CourseCard";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { courses } from "@/data/coursesData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(9);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(courses.map(c => c.category)));
    return uniqueCategories;
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const displayedCourses = filteredCourses.slice(0, displayCount);
  const hasMore = displayedCourses.length < filteredCourses.length;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 dots-pattern opacity-50" />
      
      {/* Header */}
      <header className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">
            ENJOY YOUR STUDYING!
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Our online courses
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            courseCount={courses.length}
          />
          <CourseSearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </header>

      {/* Courses Grid */}
      <main className="container mx-auto px-4 pb-16">
        {displayedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
              {displayedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
            
            {hasMore && (
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setDisplayCount(prev => prev + 9)}
                  className="gap-2 rounded-full px-8"
                >
                  <RefreshCw className="h-4 w-4" />
                  Load more
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-2xl text-muted-foreground">
              No courses found
            </p>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
