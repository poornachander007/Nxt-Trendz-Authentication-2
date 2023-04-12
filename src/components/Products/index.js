// Write your JS code here
import './index.css'
import Header from '../Header'

const Products = () => (
  <div className="page_container">
    <Header />
    <div className="products_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="produsctImage"
      />
      {/* <h1 className="products_heading">Cart</h1> */}
    </div>
  </div>
)

export default Products
