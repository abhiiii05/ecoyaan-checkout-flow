"use client"

import { useCheckout } from "../../../context/checkoutContext"

export default function ShippingPage() {
  const { setAddress } = useCheckout()

  const handleSubmit = () => {
    setAddress({
      fullName: "Abhijith",
      email: "test@gmail.com",
      phone: "1234567890",
      address:"Kudasan, Gandhinagar, Gujarat",
      pincode: "382421",
      city: "Gandhinagar",
      state: "Gujarat"
    })
  }
}