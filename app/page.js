export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white p-5 sticky top-0 shadow-xl z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">KJ CUTS</h1>
          <div className="space-x-8 text-sm font-medium uppercase tracking-wider">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#book" className="hover:text-blue-400 transition">Book</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Professional Cuts • Home Studio
          </div>
          <h2 className="text-7xl font-black mb-6 leading-tight">
            Fresh Cuts.<br/>Fair Price.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            No overpriced shops. No waiting. Just clean, professional haircuts at a price that makes sense.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#services"
              className="bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              View Services
            </a>
            <a
              href="#book"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-4">Services</h2>
            <p className="text-gray-600 text-lg">Choose your cut. Book in seconds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Regular */}
            <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm hover:shadow-xl transition group">
              <div className="text-4xl mb-6">✂️</div>
              <h3 className="text-3xl font-bold text-black mb-3">Regular Cut</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Fresh fade, clean lineup, professional finish. Everything you need, nothing you don't.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-black">$20</span>
                <span className="text-gray-500">/ 30 min</span>
              </div>
              <a
                href="https://calendly.com/carter-carterschmeling/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition group-hover:bg-blue-600"
              >
                Book Regular
              </a>
            </div>

            {/* VIP */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition group overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Premium
              </div>
              <div className="text-4xl mb-6">👑</div>
              <h3 className="text-3xl font-bold mb-3">VIP Experience</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Extended session. Extra detail. Beard trim. Styling. Hot towel. The works.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black">$60</span>
                <span className="text-gray-400">/ 1 hour</span>
              </div>
              <a
                href="https://calendly.com/carter-carterschmeling/1-hour-vip-haircut"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-black py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition group-hover:bg-blue-500 group-hover:text-white"
              >
                Book VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section id="book" className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <span className="text-2xl">📍</span>
            <p className="text-lg">Home studio — address shared after booking</p>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <span className="text-2xl">💵</span>
            <p className="text-lg">Cash or Apple Cash accepted</p>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <span className="text-2xl">⏰</span>
            <p className="text-lg">Book online 24/7 — flexible hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">KJ CUTS</p>
          <p className="text-gray-400 text-sm">© 2025 — All appointments by booking only</p>
        </div>
      </footer>
    </div>
  );
}
