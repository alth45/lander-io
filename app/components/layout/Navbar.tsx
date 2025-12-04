import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';
export default function Navbar() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Templates', href: '#templates' },
    { label: 'Why Us', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ];
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-md bg-dark-950/70">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-500/30">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          Lander<span className="text-brand-400">.io</span>
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Ganti text-white jadi text-foreground-muted biar aman di Light/Dark mode
              className="text-foreground-muted hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Insert Toggle Button Disini */}
          {/*<ThemeToggle />*/}
        </div>

        {/* <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all border border-white/10">
          Login
        </button> */}
      </div>
    </nav>
  );
}