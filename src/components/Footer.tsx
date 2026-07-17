"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-400 pt-20 pb-10 border-t border-neutral-800 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white font-black text-lg shadow-sm">
                M
              </div>
              <span className="text-xl font-bold text-white transition-colors">
                MarkupDaddy
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              MarkupDaddy is a performance-first digital marketing agency. We engineer conversion-optimized landing pages and high-ROI ad channels to scale customer acquisition.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 sm:col-span-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#services" className="hover:text-indigo-400 transition-colors">Search SEO</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-indigo-400 transition-colors">Paid Ads (PPC)</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-indigo-400 transition-colors">Social Strategy</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-indigo-400 transition-colors">Conversion (CRO)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 sm:col-span-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Agency</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/#insights" className="hover:text-indigo-400 transition-colors">Recent Work</Link>
              </li>
              <li>
                <span className="text-neutral-600 cursor-not-allowed">Careers (Hiring)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Scale Your Brand</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Get our weekly breakdown of high-ROI marketing tactics. No spam, only data.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm mb-4">
              <input
                type="email"
                placeholder="Enter work email"
                required
                className="flex-grow rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-sm font-bold text-white transition-colors"
              >
                Join
              </button>
            </form>
            <div className="text-xs text-neutral-500">
              Or email us directly at: <a href="mailto:hello@markupdaddy.com" className="text-indigo-400 hover:underline">hello@markupdaddy.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {currentYear} MarkupDaddy. Built with Next.js & Headless WordPress. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-neutral-600">Created by Antigravity AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
