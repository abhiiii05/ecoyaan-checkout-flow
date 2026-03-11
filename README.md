# Ecoyaan Checkout

An eco-friendly e-commerce checkout built with Next.js.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open http://localhost:3000

## The Stack

- **Next.js 16** - App router, React Server Components where possible
- **React Hook Form + Zod** - Form handling with schema validation
- **Context API** - Simple state management for checkout flow
- **Tailwind CSS** - Utility-first styling

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── cart/page.tsx         # Shopping cart
│   ├── checkout/
│   │   ├── shipping/         # Address form
│   │   └── payments/        # Payment & order summary
│   └── success/              # Order confirmed
├── context/
│   └── checkoutContext.tsx   # Holds shipping address across pages
├── lib/
│   ├── cart.ts               # Cart data fetching
│   ├── calc.ts               # Price calculations
│   └── validation/           # Zod schemas
└── types/
    └── checkout.ts           # TypeScript interfaces
```

## How It Works

1. User lands on home page → clicks to cart
2. Cart shows items → proceeds to checkout
3. Shipping form validates via Zod → saves to context
4. Payment page shows address + order summary → confirms order
5. Success page after payment

The context saves address so if user goes back and forth, data persists.

## Notes

- Production build works better than dev (Turbopack issues on some machines)
- Run `npm run build && npm run start` for production
- API endpoint at `/api/cart` returns mock cart data
