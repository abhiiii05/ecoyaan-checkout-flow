import Link from "next/link"
import { getCartData } from "@/lib/cart"

export default async function cartPage() {
  const cart = await getCartData()
  
  const total = cart.cartItems.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-green-600">Ecoyaan</Link>
          <span className="text-xs text-gray-400">Cart</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Your Cart</h1>
          
          {cart.cartItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.cartItems.map((item) => (
                <div key={item.product_id} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📦</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm truncate">{item.product_name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">₹{item.product_price}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors text-sm">−</button>
                    <span className="w-6 text-center text-xs">{item.quantity}</span>
                    <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors text-sm">+</button>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-medium text-gray-900 text-sm">₹{item.product_price * item.quantity}</p>
                  </div>
                </div>
              ))}

              {/* Price Summary */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900">₹{total}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span className="text-green-600">₹{total}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      {cart.cartItems.length > 0 && (
        <div className="bg-white border-t border-gray-200 px-4 py-3 flex-shrink-0">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-lg font-semibold text-green-600">₹{total}</span>
            </div>
            <Link 
              href="/checkout/shipping" 
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-medium text-sm transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}