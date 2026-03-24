import Link from "next/link"
import { getCartData } from "@/lib/cart"
import PaymentClient from "./PaymentClient"

export default async function PaymentPage() {
  const cart = await getCartData()
  
  const total = cart.cartItems.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-green-600">Ecoyaan</Link>
          <Link href="/cart" className="text-sm text-gray-500">Cart</Link>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-white px-4 py-3 flex-shrink-0">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs">
          <span className="text-gray-400">Cart</span>
          <span className="text-gray-300">›</span>
          <Link href="/checkout/shipping" className="text-gray-400 hover:text-green-600">Shipping</Link>
          <span className="text-gray-300">›</span>
          <span className="text-green-600 font-medium">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Payment</h1>

          <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Items ({cart.cartItems.length})</span>
              <span className="text-sm text-gray-900">₹{total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Shipping</span>
              <span className="text-sm text-gray-900">Free</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-100">
              <span className="font-medium text-gray-900">Total</span>
              <span className="text-lg font-semibold text-green-600">₹{total}</span>
            </div>
          </div>

          <PaymentClient cart={cart} />
        </div>
      </main>
    </div>
  )
}