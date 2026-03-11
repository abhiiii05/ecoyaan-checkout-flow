"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { shippingSchema, ShippingFormData } from "../../../lib/validation/shoppingSchema"
import { useCheckout } from "../../../context/checkoutContext"

export default function ShippingPage() {

  const router = useRouter()
  const { address, setAddress } = useCheckout()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      fullName: address?.fullName || "",
      email: address?.email || "",
      phone: address?.phone || "",
      address: address?.address || "",
      pincode: address?.pincode || "",
      city: address?.city || "",
      state: address?.state || ""
    }
  })

  const onSubmit = (data: ShippingFormData) => {
    setAddress(data)
    router.push("/checkout/payment")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("fullName")} placeholder="Full Name" />
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("phone")} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input {...register("address")} placeholder="Address" />
      {errors.address && <p>{errors.address.message}</p>}

      <input {...register("pincode")} placeholder="PIN Code" />
      {errors.pincode && <p>{errors.pincode.message}</p>}

      <input {...register("city")} placeholder="City" />
      {errors.city && <p>{errors.city.message}</p>}

      <input {...register("state")} placeholder="State" />
      {errors.state && <p>{errors.state.message}</p>}

      <button type="submit">
        Continue to Payment
      </button>

    </form>
  )
}