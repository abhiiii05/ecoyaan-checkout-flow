import { getCartData } from "@/lib/cart"
import PaymentClient from "./PaymentClient"

export default async function PaymentPage() {

  const cart = await getCartData()

  return (
    <div>
      <h1>Order Confirmation</h1>

      <PaymentClient cart={cart} />
    </div>
  )
}