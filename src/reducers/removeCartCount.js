export default function removeCountCart(countprods) {
	return {
		type: "REMOVE_COUNTCART",
		payload: countprods-1
	}
}