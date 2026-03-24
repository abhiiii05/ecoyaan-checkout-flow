"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { shippingAddress } from "@/types/checkout";

interface checkoutContextType { 
  addresses: shippingAddress[],
  selectedAddress: shippingAddress | null,
  setAddresses: (addresses: shippingAddress[]) => void,
  addAddress: (address: shippingAddress) => void,
  removeAddress: (index: number) => void,
  selectAddress: (address: shippingAddress) => void,
  setSelectedAddress: (address: shippingAddress | null) => void
}

const checkoutContext = createContext<checkoutContextType | undefined>(undefined)

const STORAGE_KEY = "ecoyaan_checkout_data"

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [addresses, setAddresses] = useState<shippingAddress[]>([])
  const [selectedAddress, setSelectedAddress] = useState<shippingAddress | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        setAddresses(data.addresses || [])
        setSelectedAddress(data.selectedAddress || null)
      } catch (e) {
        console.error("Failed to parse stored checkout data")
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ addresses, selectedAddress }))
    }
  }, [addresses, selectedAddress, isLoaded])

  const addAddress = (address: shippingAddress) => {
    setAddresses(prev => [...prev, address])
  }

  const removeAddress = (index: number) => {
    setAddresses(prev => prev.filter((_, i) => i !== index))
  }

  const selectAddress = (address: shippingAddress) => {
    setSelectedAddress(address)
  }

  return (
    <checkoutContext.Provider value={{ 
      addresses, 
      selectedAddress,
      setAddresses, 
      addAddress, 
      removeAddress,
      selectAddress,
      setSelectedAddress
    }}>
      {children}
    </checkoutContext.Provider>
  )

}

export function useCheckout() {
  const context = useContext(checkoutContext)
  
  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider")
  }
  
  return context
}
