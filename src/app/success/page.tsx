import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-light text-gray-900 mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Thank you for shopping with Ecoyaan. Your order has been placed successfully and will be delivered soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/cart"
            className="border border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
          >
            View Order
          </Link>
        </div>
      </div>
    </div>
  )
}
