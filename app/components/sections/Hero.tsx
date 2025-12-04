export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6 text-center">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px]"></div>
      </div>

      <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold tracking-wider mb-6">
        ✨ PREMIUM DESIGN ASSETS
      </span>
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
        Buat Website Impian <br />
        <span className="text-red-500 bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Tanpa Coding Rumit</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Koleksi template landing page yang didesain secara psikologis untuk meningkatkan konversi penjualan Anda hingga 300%.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#templates" className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-foreground rounded-full font-semibold shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-1 overflow-hidden">
          <span className="relative z-10">Lihat Katalog</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-brand-500 text-foreground rounded-full font-semibold transition-all hover:-translate-y-1">
          Demo Gratis
        </button>
      </div>

      {/* Abstract Graphic */}
      <div className="mt-16 relative w-full max-w-4xl mx-auto animate-float">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl blur opacity-30"></div>
        <div className="relative bg-dark-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
          <div className="h-8 bg-dark-800 border-b border-slate-700 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center p-10">
            <div className="grid grid-cols-2 gap-8 w-full opacity-50">
              <div className="h-40 rounded-lg bg-slate-700/30 w-full"></div>
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-slate-700/30 rounded"></div>
                <div className="h-4 w-full bg-slate-700/30 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-700/30 rounded"></div>
                <div className="h-10 w-1/3 bg-brand-600/30 rounded mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}