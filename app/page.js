import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="bg-black text-white p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">KJ CUTS</h1>
          <div className="space-x-8 text-sm uppercase tracking-wider">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#gallery" className="hover:text-blue-400">Gallery</a>
            <a href="#book" className="hover:text-blue-400">Book</a>
          </div>
        </div>
      </nav>

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[650px] flex items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src="/IMG_0270.jpeg"
          alt="KJ Cuts Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Professional Cuts • Home Studio
          </p>
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Fresh Cuts.<br />Fair Price.
          </h2>
          <p className="text-gray-200 text-xl mb-10">
            Clean fades. Sharp lineups. No overpriced shops.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#services"
              className="bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-100"
            >
              View Services
            </a>
            <a
              href="#book"
              className="border-2 border-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-black transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Recent Work</h2>
          <p className="text-gray-600 text-lg">Fresh cuts. Clean fades. Professional results.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <Image
              src="/IMG_0271.jpeg"
              alt="KJ Cuts - Professional Cut"
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <Image
              src="/IMG_0273.jpeg"
              alt="KJ Cuts - Fresh Fade"
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Services</h2>
          <p className="text-gray-600 text-lg">Choose your cut. Book in seconds.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* REGULAR */}
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
              Extended session. Extra detail. Styling. The works.
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
      </section>

      {/* INFO */}
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

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">KJ CUTS</p>
          <p className="text-gray-400 text-sm">© 2025 — All appointments by booking only</p>
        </div>
      </footer>
    </div>
  );
}
