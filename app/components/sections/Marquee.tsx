export default function Marquee() {
  const items = [
    "Responsive Design", "High Conversion", "SEO Optimized", "Dark Mode Ready", "Fast Loading"
  ];

  // Duplikasi array untuk efek infinite loop yang mulus
  const loopedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="py-10 bg-dark-900 border-y border-white/5 overflow-hidden">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-2xl font-bold text-slate-600 uppercase tracking-widest items-center">
          {loopedItems.map((text, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}