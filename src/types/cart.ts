export interface cartItem { 
  product_id: number,
  product_name: string,
  product_price: number,
  quantity: number,
  image_url: string
}


export interface cartData { 
  cartItems: cartItem[],
  shipping_fee: number,
  discount_applied: number,
}