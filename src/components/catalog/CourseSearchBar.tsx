import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CourseSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const CourseSearchBar = ({ value, onChange }: CourseSearchBarProps) => {
  return (
    <div className="relative w-full max-w-xs">
      <Input
        type="text"
        placeholder="Search course..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-4 pr-10 h-11 bg-card border-border rounded-md text-sm"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
    </div>
  );
};
