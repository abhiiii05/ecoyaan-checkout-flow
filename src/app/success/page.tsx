import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 md:mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-500 mb-6 md:8 max-w-sm mx-auto text-sm md:text-base">
          Thank you for shopping with Ecoyaan. Your order has been placed successfully and will be delivered soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <Link 
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-md font-medium transition-colors"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/cart"
            className="border border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 px-6 md:px-8 py-3 rounded-md font-medium transition-colors"
          >
            View Order
          </Link>
        </div>
      </div>
    </div>
  )
}