import { PRODUCTS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { Metadata } from 'next';
import CheckoutForm from '@/components/features/CheckoutForm';
import Image from 'next/image';
// Perbaikan 1: Type params sekarang adalah Promise
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  const product = PRODUCTS.find((p) => p.id === Number(id));
  // Fallback jika produk tidak ada (judul default)
  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
    }
  }

  // Return Metadata Dinamis
  return {
    title: `${product.title} - Premium Template | Lander.io`,
    description: product.desc,
    openGraph: {
      title: `Beli ${product.title} - Hanya ${product.price}`,
      description: `Dapatkan source code lengkap ${product.title}. ${product.desc}`,
      // Karena kita belum punya gambar real, kita bisa set default atau kosongkan dulu
      // images: ['/thumbnail-default.jpg'], 
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.desc,
    }
  }
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params; // Await params di sini juga

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 container mx-auto px-6">
      {/* Breadcrumb Simple */}
      <div className="mb-8 text-sm text-foreground-muted">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* KOLOM KIRI: Detail Produk */}
        <div>
          {/* Image Placeholder */}
          {/* <div className={clsx("w-full aspect-video rounded-2xl mb-8 bg-gradient-to-br shadow-2xl shadow-brand-900/20", product.gradient)}></div> */}
          {/* --- MULAI UPDATE BAGIAN IMAGE --- */}
          <div className="group relative w-full aspect-video rounded-2xl mb-8 overflow-hidden shadow-2xl shadow-brand-900/20 border border-border">

            {/* 1. Gambar Asli */}
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[2px]" // Efek zoom & blur dikit pas hover
              priority
            />

            {/* 2. Overlay Gelap (Backdrop) */}
            <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* 3. Tombol Demo (Muncul di tengah) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-brand-600 rounded-full font-bold shadow-xl hover:bg-gray-500 transition-colors transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                Live Preview
              </a>
            </div>

            {/* Badge "Click to Preview" (Optional: Biar user mobile tau) */}
            <div className="absolute bottom-4 right-4 md:hidden">
              <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-md border border-white/20">
                Tap to Preview
              </span>
            </div>

          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-600/10 text-brand-600 text-sm font-semibold rounded-full border border-brand-600/20">
              {product.category}
            </span>
            <span className="text-2xl font-bold text-foreground">{product.price}</span>
          </div>

          <p className="text-foreground-muted leading-relaxed mb-8 text-lg">
            {product.desc}
          </p>

          <div className="bg-background-secondary p-6 rounded-xl border border-border">
            <h3 className="text-foreground font-semibold mb-4">Apa yang Anda dapatkan:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground-muted">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Source Code Lengkap ({product.files})</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Lisensi Penggunaan Komersial</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Lifetime Updates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* KOLOM KANAN: Form Checkout */}
        <CheckoutForm productTitle={product.title} productPrice={product.price} />

      </div>
    </main>
  );
}