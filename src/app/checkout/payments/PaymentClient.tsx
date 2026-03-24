"use client"

import { useRouter } from "next/navigation"
import { cartData } from "../../../types/cart"
import { useCheckout } from "../../../context/checkoutContext"
import { calculateTotal } from "@/lib/calc"
import Link from "next/link"

interface Props {
  cart: cartData
}
export default function PaymentClient({ cart }: Props) {
  const router = useRouter()
  const { selectedAddress } = useCheckout()

  const { subTotal, actualTotal } = calculateTotal(cart)

  const handlePayment = () => {
    router.push("/success")
  }

  const handleBack = () => {
    router.push("/checkout/shipping")
  }

  if (!selectedAddress) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No shipping address selected.</p>
        <button 
          onClick={() => router.push("/checkout/shipping")}
          className="text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Select Address →
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Shipping Address */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Shipping Address</h3>
        <p className="font-medium text-gray-900 text-sm">{selectedAddress.fullName}</p>
        <p className="text-xs text-gray-500 mt-1">{selectedAddress.address}</p>
        <p className="text-xs text-gray-500">{selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
        <p className="text-xs text-gray-400 mt-1">{selectedAddress.phone} • {selectedAddress.email}</p>
      </div>

      {/* Order Items */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Order Items</h3>
        <div className="space-y-2">
          {cart.cartItems.map((item) => (
            <div key={item.product_id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-sm">📦</div>
                <div>
                  <p className="text-xs text-gray-900 font-medium truncate max-w-[150px]">{item.product_name}</p>
                  <p className="text-xs text-gray-400">₹{item.product_price} × {item.quantity}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-900">₹{item.product_price * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-1">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Subtotal</span>
          <span>₹{subTotal}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Shipping</span>
          <span>₹{cart.shipping_fee}</span>
        </div>
        <div className="flex justify-between text-sm font-medium pt-1 border-t border-gray-100">
          <span>Total</span>
          <span className="text-green-600">₹{actualTotal}</span>
        </div>
      </div>

      {/* Payment Button */}
      <button 
        onClick={handlePayment}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium text-sm transition-colors"
      >
        Pay ₹{actualTotal}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Secure payment
      </p>
    </div>
  )
}