"use client"

import Link from "next/link"
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
    router.push("/checkout/payments")
  }

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
          <span className="text-sm text-green-700 font-medium">Shipping</span>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-400">Payment</span>
        </div>

        <h1 className="text-2xl font-light text-gray-900 mb-8">Shipping Details</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              {...register("fullName")} 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                {...register("email")} 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                {...register("phone")} 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="1234567890"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input 
              {...register("address")} 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="123 Main Street"
            />
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
              <input 
                {...register("pincode")} 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="123456"
              />
              {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input 
                {...register("city")} 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Mumbai"
              />
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input 
                {...register("state")} 
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Maharashtra"
              />
              {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-md font-medium transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
