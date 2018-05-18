export default function setCart(cart) {
	return {
		type: "SET_CART",
		payload: cart+1,
	}
}