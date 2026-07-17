import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-105">
                M
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-indigo-300 transition-colors">
                MarkupDaddy
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="https://wordpress.org"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                WordPress backend
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-neutral-200 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <span>Hosted on Vercel</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
