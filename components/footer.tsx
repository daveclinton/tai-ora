export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70 rounded-t-2xl shadow-lg border-t border-amber-300/20 mt-12">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-10 md:py-14">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Glowing Logo */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-xl shadow-amber-400/70 ring-2 ring-amber-300/50 mb-6 sm:mb-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
            <img
              src="/logo.png"
              alt="Tai Ora logo"
              className="w-full h-full object-cover relative z-10"
            />
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-teal-100">
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Creators
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Brands
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-8 border-amber-300/30" />

        {/* Copyright */}
        <span className="block text-sm text-teal-100/80 sm:text-center">
          © 2025{" "}
          <a
            href="https://taiora.com/"
            className="hover:text-amber-300 transition-colors"
          >
            Tai Ora™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
