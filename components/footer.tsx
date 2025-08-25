export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-800/90 via-teal-700/80 rounded-lg shadow-sm  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-xl shadow-amber-400/70 ring-2 ring-amber-300/50">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
            <img
              src="/logo.png"
              alt="Tai Ora logo"
              className="w-full h-full object-cover relative"
            />
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Creators
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brand
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto bg-yellow-500 lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Tai Ora™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
