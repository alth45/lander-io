'use client';

import { useState } from 'react';

interface CheckoutFormProps {
  productTitle: string;
  productPrice: string;
}

export default function CheckoutForm({ productTitle, productPrice }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Nomor Admin (Ganti dengan nomor lo, pakai format 62)
    const phoneNumber = '6281234567890';

    // 2. Format Pesan
    const message = `Halo Admin Lander.io,
Saya ingin membeli template premium:
    
📦 *${productTitle}*
💰 Harga: ${productPrice}
    
👤 Nama: ${formData.name}
📧 Email: ${formData.email}
    
Mohon info rekening pembayarannya. Terima kasih!`;

    // 3. Encode URL agar aman di browser
    const encodedMessage = encodeURIComponent(message);

    // 4. Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-background-secondary p-8 rounded-3xl border border-border sticky top-32">
      <h2 className="text-2xl font-bold text-foreground mb-6">Lengkapi Pesanan</h2>

      <form onSubmit={handleWhatsAppCheckout} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground-muted mb-2">Nama Lengkap</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all"
            placeholder="Jhon Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground-muted mb-2">Alamat Email</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all"
            placeholder="jhon@example.com"
          />
          <p className="text-xs text-foreground-muted mt-2">*File akan dikirim ke email ini.</p>
        </div>

        <div className="pt-4 border-t border-border mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-foreground-muted">Total Pembayaran</span>
            <span className="text-2xl font-bold text-foreground">{productPrice}</span>
          </div>

          <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
            {/* Icon WhatsApp */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            Beli via WhatsApp
          </button>

          <p className="text-center text-xs text-foreground-muted mt-4">
            ⚡ Respon Cepat & Transaksi Langsung dengan Admin
          </p>
        </div>
      </form>
    </div>
  );
}