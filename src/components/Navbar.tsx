import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-500/10 transition-transform group-hover:scale-105">
                M
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent transition-all group-hover:opacity-90">
                MarkupDaddy
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/#services"
                className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#tech"
                className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors"
              >
                Technologies
              </Link>
              <Link
                href="/#testimonials"
                className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/#insights"
                className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors"
              >
                Insights
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-600/10 hover:bg-indigo-500 transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
