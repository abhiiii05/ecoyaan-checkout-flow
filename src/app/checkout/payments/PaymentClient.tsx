"use client"

import { useRouter } from "next/navigation"
import { cartData } from "../../../types/cart"
import { useCheckout } from "../../../context/checkoutContext"
import { calculateTotal } from "@/lib/calc"

interface Props {
  cart: cartData
}
export default function PaymentClient({ cart }: Props) {

  const router = useRouter()
  const { address } = useCheckout()

  const { subTotal, actualTotal } = calculateTotal(cart)

  const handlePayment = () => {
    router.push("/success")
  }

  if (!address) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No shipping address found.</p>
        <button 
          onClick={() => router.push("/checkout/shipping")}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Add Shipping Address
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Shipping Address</h3>
        <p className="text-gray-900 font-medium">{address.fullName}</p>
        <p className="text-gray-600 mt-1">{address.address}</p>
        <p className="text-gray-600">{address.city}, {address.state} - {address.pincode}</p>
        <p className="text-gray-600 mt-1">{address.phone} • {address.email}</p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Order Items</h3>
        <div className="space-y-3">
          {cart.cartItems.map((item) => (
            <div key={item.product_id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-xl">📦</div>
                <div>
                  <p className="text-gray-900 font-medium">{item.product_name}</p>
                  <p className="text-sm text-gray-500">₹{item.product_price} × {item.quantity}</p>
                </div>
              </div>
              <span className="text-gray-900 font-medium">₹{item.product_price * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₹{subTotal}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>₹{cart.shipping_fee}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-100">
          <span>Total</span>
          <span className="text-green-700">₹{actualTotal}</span>
        </div>
      </div>

      <button 
        onClick={handlePayment}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-md font-medium transition-colors"
      >
        Pay Securely ₹{actualTotal}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Secure payment powered by trusted providers
      </p>
    </div>
  )
}
