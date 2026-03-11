const stats = [
  { number: "15", label: "Australians" },
  { number: "15", label: "Policy areas" },
  { number: "7", label: "States & territories" },
  { number: "9\u201376", label: "Ages represented" },
];

export default function StatsBar() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-3xl text-white md:text-4xl">
              {stat.number}
            </div>
            <div className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.12em] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
