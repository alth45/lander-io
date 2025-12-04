import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Catalog from '@/components/features/Catalog';
import Features from '@/components/sections/Features';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Marquee />

      <Features />

      <Catalog />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-brand-600 to-indigo-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-brand-900/50 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Meningkatkan Penjualan?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Dapatkan akses ke seluruh library template kami dengan berlangganan membership tahunan. Hemat hingga 70%.</p>
            <button className="bg-transparent border border-brand-500 text-brand-600 px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-colors shadow-lg">
              Gabung Membership
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}