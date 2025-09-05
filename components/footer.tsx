import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70 rounded-t-2xl shadow-lg border-t border-amber-300/20 mt-12">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-xl shadow-amber-400/70 ring-2 ring-amber-300/50 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
              <img
                src="/logo.png"
                alt="Tai Ora logo"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            <p className="text-white text-lg font-medium mb-2">Tai Ora</p>
            <p className="text-amber-100/80 text-sm text-center md:text-left max-w-xs">
              Connecting creators with brands for authentic partnerships and
              campaigns.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-6">
            <ul className="flex flex-col items-center md:items-start gap-4 text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-amber-300 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/creators"
                  className="hover:text-amber-300 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="hover:text-amber-300 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-9">
            <h3 className="text-amber-300 font-semibold text-lg mb-5 text-center md:text-left">
              Company
            </h3>
            <div className="flex flex-col items-center md:items-start gap-4 text-white text-sm">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Perth, Western Australia</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <p>ABN 17 688 356 532</p>
                  <p>ACN 688 356 532</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative mb-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-amber-300/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-teal-800 text-amber-300 text-lg">•</span>
          </div>
        </div>

        {/* Copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-amber-300/20">
          <div className="text-white text-sm text-center md:text-left order-2 md:order-1">
            <p>© Tai Ora {year}. Patent Pending</p>
          </div>
          <div className="order-1 md:order-2">
            <a
              href="https://taiora.com/"
              className="text-amber-300 hover:text-white transition-colors font-medium text-lg"
            >
              Tai Ora™
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
