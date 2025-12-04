'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '@/lib/data';
import Image from 'next/image';
import clsx from 'clsx'; // Install clsx: npm install clsx

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const INITIAL_LOAD = 6;
  const LOAD_MORE_STEP = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);


  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  const currentViewProduct = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_LOAD);
  }

  return (
    <section id="templates" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Katalog Template</h2>
          <p className="text-slate-400">Pilih desain yang sesuai dengan niche bisnis Anda.</p>
        </div>

        {/* Filters */}
        <div className="mt-6 md:mt-0 flex flex-wrap gap-2 bg-background-secondary p-1.5 rounded-xl border border-border">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)} // Update handler disini
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50'
                  : 'text-foreground-muted hover:text-foreground hover:bg-white/5'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentViewProduct.map((product) => (
          <div key={product.id} className="group relative bg-background-secondary rounded-2xl overflow-hidden border border-border hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* 2. Bungkus Image Area dengan Link */}
            <Link href={`/checkout/${product.id}`} className="block aspect-[4/3] bg-background relative overflow-hidden group-hover:opacity-100 cursor-pointer">
              {/* <div className={clsx(`absolute inset-0 bg-gradient-to-br opacity-80 transition-transform duration-700 group-hover:scale-105`, product.gradient)}></div> */}
              {/* ... (sisa code image area sama) ... */}
              <Image
                src={product.image}
                alt={product.title}
                fill // Agar gambar memenuhi kotak (responsive)
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </Link>

            {/* Content Area */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                {/* 3. Judul juga bisa diklik */}
                <Link href={`/checkout/${product.id}`}>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand-400 transition-colors">{product.title}</h3>
                </Link>
                <span className="text-lg font-bold text-foreground">{product.price}</span>
              </div>
              <p className="text-foreground-muted text-sm mb-6 line-clamp-2">{product.desc}</p>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center text-xs text-foreground-muted gap-1">
                  {/* ... icon file ... */}
                  {product.files} Files
                </div>

                {/* 4. Ubah Tombol Beli jadi Link */}
                <Link
                  href={`/checkout/${product.id}`}
                  className="text-sm font-semibold text-brand-600 hover:text-brand-500 flex items-center gap-1 transition-colors"
                >
                  Beli Sekarang
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">Tidak ada template untuk kategori ini.</p>
        </div>
      )}


      {/* <div className="text-center mt-16">
         <button className="px-8 py-3 bg-dark-800 hover:bg-dark-700 text-white rounded-full border border-slate-700 transition-colors text-sm font-medium">
           Load More Templates
        </button>
      </div> */}

      {/* 5. TOMBOL LOAD MORE (Hanya muncul jika hasMore = true) */}
      {hasMore && (
        <div className="text-center mt-16">
          <button
            onClick={() => setVisibleCount(prev => prev + LOAD_MORE_STEP)}
            className="px-8 py-3 bg-background-secondary hover:bg-background text-foreground rounded-full border border-border transition-all hover:border-brand-500 hover:shadow-lg hover:-translate-y-1 text-sm font-medium group"
          >
            Load More Templates
            {/* Panah animasi ke bawah */}
            <span className="inline-block ml-2 transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </button>

          {/* Info Text (Opsional: Menampilkan 6 dari 12) */}
          <p className="text-xs text-foreground-muted mt-4">
            Menampilkan {currentViewProduct.length} dari {filteredProducts.length} template
          </p>
        </div>
      )}
    </section>
  );
}