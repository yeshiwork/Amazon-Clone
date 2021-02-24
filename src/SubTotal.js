import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom';
const SubTotal = () => {
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();
	const getBasketTotal = (basket) => 
		basket.reduce((amount, item) => item.price + amount, 0);
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items):<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e)=>history.push('/payment')}>Proceed to Checkout</button>
		</div>
	);
};

export default SubTotal;
