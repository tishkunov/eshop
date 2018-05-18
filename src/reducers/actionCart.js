export default function setCountCart(countprods) {
	return {
		type: "SET_COUNTCART",
		payload: countprods+1
	}
}