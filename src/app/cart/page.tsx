import Link from "next/link"
import { getCartData } from "@/lib/cart"

export default async function cartPage() {
  const cart = await getCartData()
  
  const total = cart.cartItems.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-green-700">Ecoyaan</Link>
          <Link href="/checkout/shipping" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
            Checkout
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-light text-gray-900 mb-8">Shopping Cart</h1>
        
        {cart.cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6">Your cart is empty</p>
            <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.cartItems.map((item) => (
              <div key={item.product_id} className="flex items-center gap-6 p-4 border border-gray-100 rounded-lg">
                <div className="w-20 h-20 bg-gray-50 rounded-md flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.product_name}</h3>
                  <p className="text-sm text-gray-500 mt-1">₹{item.product_price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">−</button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">+</button>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₹{item.product_price * item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-xl font-medium text-gray-900">₹{total}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">Free</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-lg font-medium text-gray-900">Total</span>
                <span className="text-2xl font-semibold text-green-700">₹{total}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/checkout/shipping" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-md font-medium transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
