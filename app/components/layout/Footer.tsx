import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* 1. Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            Lander<span className="text-brand-600">.io</span>
                        </Link>
                        <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-6">
                            Platform penyedia template landing page premium nomor #1 di Indonesia. Desain modern, kode bersih, dan siap pakai untuk meningkatkan konversi bisnis Anda.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {['twitter', 'github', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-background-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-brand-600 hover:border-brand-600 transition-all hover:-translate-y-1">
                                    <span className="sr-only">{social}</span>
                                    {/* Icon Placeholder dot */}
                                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Link Group: Produk */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6">Produk</h4>
                        <ul className="space-y-3 text-sm text-foreground-muted">
                            <li><Link href="#templates" className="hover:text-brand-600 transition-colors">SaaS Templates</Link></li>
                            <li><Link href="#templates" className="hover:text-brand-600 transition-colors">Agency Kits</Link></li>
                            <li><Link href="#templates" className="hover:text-brand-600 transition-colors">E-Commerce</Link></li>
                            <li><Link href="#templates" className="hover:text-brand-600 transition-colors">Portfolio Personal</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2">
                                Free Resources <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-100 dark:bg-brand-900 text-brand-600 font-bold">New</span>
                            </Link></li>
                        </ul>
                    </div>

                    {/* 3. Link Group: Support */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6">Perusahaan</h4>
                        <ul className="space-y-3 text-sm text-foreground-muted">
                            <li><Link href="#features" className="hover:text-brand-600 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Afiliasi</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Kontak Admin</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 transition-colors">Lisensi Penggunaan</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground-muted gap-4">
                    <p>&copy; {currentYear} Lander.io Inc. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}