import Link from "next/link"

function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md font-medium transition-colors ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold text-green-700">Ecoyaan</span>
          <nav className="flex items-center gap-6">
            <Link href="/cart" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
              Cart
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-sm text-green-600 font-medium">Sustainable Shopping</span>
          <h1 className="text-5xl font-light text-gray-900 mt-4 mb-6 leading-tight">
            Eco-friendly products for a better tomorrow
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Discover our curated collection of sustainable, eco-friendly products. 
            Every purchase supports a greener planet.
          </p>
          <Link href="/cart">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base">
              Browse Products
            </Button>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Sustainable", desc: "Products that care for the planet" },
            { title: "Ethical", desc: "Fair trade & transparent sourcing" },
            { title: "Zero Waste", desc: "Plastic-free packaging" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
