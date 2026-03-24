"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

import { shippingSchema, ShippingFormData } from "../../../lib/validation/shoppingSchema"
import { useCheckout } from "../../../context/checkoutContext"

export default function ShippingPage() {
  const router = useRouter()
  const { addresses, selectedAddress, addAddress, removeAddress, selectAddress, setSelectedAddress } = useCheckout()
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema)
  })

  const handleEdit = (address: ShippingFormData, index: number) => {
    setEditingIndex(index)
    setShowForm(true)
    Object.keys(address).forEach((key) => {
      setValue(key as keyof ShippingFormData, address[key as keyof ShippingFormData])
    })
  }

  const handleAddNew = () => {
    setEditingIndex(null)
    setShowForm(true)
    reset()
  }

  const onSubmit = (data: ShippingFormData) => {
    if (editingIndex !== null) {
      const updated = [...addresses]
      updated[editingIndex] = data
      setSelectedAddress(data)
    } else {
      addAddress(data)
      setSelectedAddress(data)
    }
    setShowForm(false)
    setEditingIndex(null)
    reset()
  }

  const handleContinue = () => {
    if (selectedAddress) {
      router.push("/checkout/payments")
    }
  }

  const handleBack = () => {
    router.push("/cart")
  }

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
          <span className="text-green-600 font-medium">Shipping</span>
          <span className="text-gray-300">›</span>
          <span className="text-gray-400">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h1>

          {!showForm ? (
            <div className="space-y-3">
              {addresses.length > 0 && (
                <div className="space-y-2">
                  {addresses.map((addr, index) => (
                    <div 
                      key={index}
                      onClick={() => selectAddress(addr)}
                      className={`p-3 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedAddress === addr 
                          ? 'border-green-500 bg-green-50/50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm truncate">{addr.fullName}</p>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">{addr.address}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{addr.city}, {addr.state} - {addr.pincode}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{addr.phone}</p>
                        </div>
                        <div className="flex flex-col gap-1 flex-shrink-0">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleEdit(addr, index); }}
                            className="text-xs text-green-600 hover:text-green-700 font-medium"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); removeAddress(index); }}
                            className="text-xs text-gray-400 hover:text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      {selectedAddress === addr && (
                        <div className="mt-2 pt-2 border-t border-green-200">
                          <span className="text-xs text-green-600 font-medium">✓ Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <button 
                onClick={handleAddNew}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors flex items-center justify-center gap-2 bg-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium">Add New Address</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 bg-white p-4 rounded-xl border border-gray-200">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
                <input 
                  {...register("fullName")} 
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter full name"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
                  <input 
                    {...register("email")} 
                    type="email"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone</label>
                  <input 
                    {...register("phone")} 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Phone"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Address</label>
                <input 
                  {...register("address")} 
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Full address"
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">PIN</label>
                  <input 
                    {...register("pincode")} 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="PIN"
                  />
                  {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode.message}</p>}
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">City</label>
                  <input 
                    {...register("city")} 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="City"
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">State</label>
                  <input 
                    {...register("state")} 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="State"
                  />
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="button"
                  onClick={() => { setShowForm(false); setEditingIndex(null); reset(); }}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  {editingIndex !== null ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="max-w-md mx-auto flex gap-2">
          <button 
            onClick={handleBack}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
          <button 
            onClick={handleContinue}
            disabled={!selectedAddress && addresses.length > 0}
            className={`flex-1 py-3 rounded-xl font-medium text-sm transition-colors ${
              selectedAddress || addresses.length === 0
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  )
}