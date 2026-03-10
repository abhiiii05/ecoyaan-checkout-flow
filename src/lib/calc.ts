import { cartData } from "@/types/cart";

export function calculateTotal(cart: cartData) {
  const subTotal = cart.cartItems.reduce((total, item) => {
    return total + item.product_price * item.quantity;
  }, 0);
  
  const actualTotal = subTotal + cart.shipping_fee - cart.discount_applied
  
  return {
    subTotal,
    actualTotal,
  };
}