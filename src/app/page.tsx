import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#E8E6E1] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Ecoyaan</span>
          </div>
          <Link href="/cart" className="relative group">
            <svg className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            🌿 Sustainable Living Starts Here
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 leading-[1.15] mb-6">
          <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Eco-friendly
          </span>
          <br />
          essentials for
          <br />
          a better tomorrow
        </h1>

        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Curated collection of sustainable products that are good for you 
          and the planet. Every purchase makes a difference.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link 
            href="/cart" 
            className="group relative inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-green-600/25"
          >
            <span>Explore Collection</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats/Social Proof */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          {[
            { num: "10K+", label: "Happy Customers" },
            { num: "500+", label: "Eco Products" },
            { num: "50K+", label: "Trees Planted" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.num}</div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: "🌱", 
              title: "100% Sustainable", 
              desc: "Products sourced from ethical suppliers who prioritize the environment" 
            },
            { 
              icon: "♻️", 
              title: "Zero Waste", 
              desc: "Plastic-free packaging and carbon-neutral delivery on all orders" 
            },
            { 
              icon: "🤝", 
              title: "Fair Trade", 
              desc: "Supporting local artisans and small businesses with fair wages" 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-[#E8E6E1] hover:border-green-300 hover:shadow-xl hover:shadow-green-600/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Product Teaser */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { name: "Bamboo Products", emoji: "🎋" },
              { name: "Organic Cotton", emoji: "👕" },
              { name: "Solar Items", emoji: "☀️" },
              { name: "Zero Waste", emoji: "🗑️" }
            ].map((cat, i) => (
              <Link 
                key={i}
                href="/cart"
                className="group bg-white rounded-xl p-4 md:p-6 border border-[#E8E6E1] hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{cat.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 text-center border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Movement</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get exclusive offers and updates on new eco-friendly products
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E6E1] bg-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center">
              <span className="text-white text-xs">E</span>
            </div>
            <span className="text-sm text-gray-600">© 2024 Ecoyaan. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-600 transition-colors">About</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-green-600 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}