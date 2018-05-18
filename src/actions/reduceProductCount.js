export default function setCart(cart) {
	return {
		type: "REDUCECOUNT_CART",
		payload: cart-1,
	}
}