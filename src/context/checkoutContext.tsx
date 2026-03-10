"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { shippingAddress } from "@/types/checkout";

interface checkoutContextType { 
  address: shippingAddress | null,
  setAddress: (address : shippingAddress) => void
}

const checkoutContext = createContext<checkoutContextType | undefined>(undefined)

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<shippingAddress | null>(null)

  return (
    <checkoutContext.Provider value={{ address, setAddress }}>
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

