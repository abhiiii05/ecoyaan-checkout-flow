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
    return <p>No shipping address found.</p>
  }

  return (
    <div>

      <h2>Shipping Address</h2>

      <p>{address.fullName}</p>
      <p>{address.email}</p>
      <p>{address.phone}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      <p>{address.pincode}</p>

      <h2>Order Summary</h2>

      {cart.cartItems.map((item) => (
        <div key={item.product_id}>
          <p>{item.product_name}</p>
          <p>₹{item.product_price} × {item.quantity}</p>
        </div>
      ))}

      <p>Subtotal: ₹{subTotal}</p>
      <p>Shipping: ₹{cart.shipping_fee}</p>
      <p>Total: ₹{actualTotal}</p>

      <button onClick={handlePayment}>
        Pay Securely
      </button>

    </div>
  )
}