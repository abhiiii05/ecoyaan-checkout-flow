import Link from "next/link"
import { getCartData } from "@/lib/cart"
import PaymentClient from "./PaymentClient"

export default async function PaymentPage() {
  const cart = await getCartData()
  
  const total = cart.cartItems.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-green-700">Ecoyaan</Link>
          <Link href="/cart" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
            Cart
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/cart" className="text-sm text-gray-400 hover:text-green-600 transition-colors">Cart</Link>
          <span className="text-gray-300">/</span>
          <Link href="/checkout/shipping" className="text-sm text-gray-400 hover:text-green-600 transition-colors">Shipping</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-green-700 font-medium">Payment</span>
        </div>

        <h1 className="text-2xl font-light text-gray-900 mb-8">Payment</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Items ({cart.cartItems.length})</span>
            <span className="text-gray-900">₹{total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-900">Free</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="font-medium text-gray-900">Total</span>
            <span className="text-xl font-semibold text-green-700">₹{total}</span>
          </div>
        </div>

        <PaymentClient cart={cart} />
      </main>
    </div>
  )
}
