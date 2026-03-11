import { z } from "zod"

export const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

  address: z.string().min(1, "Address is required"),

  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, "PIN code must be 6 digits"),

  city: z.string().min(1, "City is required"),

  state: z.string().min(1, "State is required")
})

export type ShippingFormData = z.infer<typeof shippingSchema>