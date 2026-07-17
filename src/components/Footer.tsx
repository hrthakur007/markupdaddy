export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 py-12 text-neutral-500 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center text-white font-black text-xs">
              M
            </div>
            <span className="text-sm font-semibold text-neutral-300">
              MarkupDaddy
            </span>
          </div>

          <p className="text-center text-xs text-neutral-600 md:text-left">
            &copy; {currentYear} MarkupDaddy. Built with Next.js & Headless WordPress. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <span className="text-neutral-600">Created by Antigravity AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
