"use client"

import { useCheckout } from "../../../context/checkoutContext"

export default function PaymentPage() {
  const { address } = useCheckout()

  return (
    <div>
      <h2>Shipping Address</h2>
      <p>{address?.fullName}</p>
      <p>{address?.city}</p>
      <p>{address?.state}</p>
    </div>
  )
}