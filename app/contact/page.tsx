import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70 min-h-screen">
      <div className="relative flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="w-36 h-36 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-amber-300/50 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
          <img
            src="/logo.png"
            alt="Tai Ora logo"
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-light italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          Let's connect
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed mb-10">
          We'd love to hear from you — whether you're curious about Tai Ora,
          want to collaborate, or just want to say kia ora.
        </p>
      </div>

      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-teal-800 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-teal-800 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-type"
                className="block text-sm font-medium text-teal-800 mb-1"
              >
                Type of Enquiry (Optional)
              </label>
              <select
                id="enquiry-type"
                name="enquiry-type"
                className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900"
              >
                <option value="">Please select</option>
                <option value="general">General Enquiry</option>
                <option value="media">Press/Media</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-teal-800 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="pt-4">
              <Button className="w-full text-base bg-teal-800 text-white py-4">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20 mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-amber-300 text-xl font-light mb-4">
                Get in touch
              </h3>
              <p className="text-teal-100 mb-2">Email us at:</p>
              <a
                href="mailto:hello@tai-ora.com"
                className="text-white hover:text-amber-300 transition text-lg"
              >
                hello@tai-ora.com
              </a>
              <p className="text-teal-100 mt-6 mb-2 text-sm italic">
                For press & partnerships, email directly:
              </p>
              <a
                href="mailto:partnerships@tai-ora.com"
                className="text-white hover:text-amber-300 transition"
              >
                partnerships@tai-ora.com
              </a>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-amber-300 text-xl font-light mb-4">
                Follow us
              </h3>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="#"
                  className="text-teal-100 hover:text-amber-300 transition transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-teal-100 hover:text-amber-300 transition transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
