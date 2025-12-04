export default function Features() {
  const benefits = [
    {
      title: "Built for Conversion",
      desc: "Desain berbasis psikologi marketing untuk mengubah pengunjung menjadi pembeli.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      )
    },
    {
      title: "Modern Tech Stack",
      desc: "Dibuat dengan Next.js 15, Tailwind CSS, dan TypeScript. Kode bersih & mudah diedit.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      )
    },
    {
      title: "Lifetime Updates",
      desc: "Sekali bayar, dapat update selamanya. Termasuk perbaikan bug dan fitur baru.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-background-secondary border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Kenapa Memilih Lander.io?</h2>
          <p className="text-foreground-muted max-w-xl mx-auto">Kami tidak sekadar membuat desain cantik, tapi juga memastikan performa dan kualitas kode terbaik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-background p-8 rounded-2xl border border-border hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-brand-600/10 rounded-lg flex items-center justify-center text-brand-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}