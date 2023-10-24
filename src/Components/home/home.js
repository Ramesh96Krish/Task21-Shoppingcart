import Products from "../products/product";
import "./home.css"


const Home = (props)=>{
    return(
        <div className="products-container">
        {props.product.map((product, index) => (
          <Products
            product={product}
            cartItems={props.cartItems}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            key={index}
          />
        ))}
      </div>
    )
}
export default Home;