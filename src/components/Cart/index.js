// Write your JS code here
import './index.css'
import Header from '../Header'

const Cart = () => (
  <div className="page_container">
    <Header />
    <div className="cart_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cartImage"
      />
      {/* <h1 className="cart_heading">Cart</h1> */}
    </div>
  </div>
)

export default Cart
