import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
      <h1 className="text-6xl font-bold text-brand-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-foreground-muted mb-8 max-w-md">
        Sepertinya produk yang Anda cari sudah dihapus atau link yang Anda tuju salah.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-500 transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}