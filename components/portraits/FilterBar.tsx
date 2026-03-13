"use client";

interface FilterBarProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          active === "All"
            ? "bg-black text-white"
            : "bg-gray-light text-muted hover:text-black"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-black text-white"
              : "bg-gray-light text-muted hover:text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
