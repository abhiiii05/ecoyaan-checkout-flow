import { getCartData } from "@/lib/cart";

export async function carPage() {
  const cart = await getCartData();
  
  return (
    <div>
      <h1>Cart</h1>
      
      {cart.cartItems.map((item) => (
        <div key={item.product_id}>
          <h2>{item.product_name}</h2>
          <p>{item.product_price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
      
    </div>
  )
}