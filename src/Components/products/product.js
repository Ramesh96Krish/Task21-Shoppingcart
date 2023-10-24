import './product.css'
const Products = (props)=>{

    const{product, cartItems, addToCart, removeFromCart } = props;

    const addingItemToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };


    return(
        <div className='product-container'>
            {product.special==="special"?
            (
                <div className='product-card'>
                        <div className='image-container'>
                            <img src={product.imgUrl} className='product-image' alt='product-image' />
                    <div>
                     <h3>{product.item}</h3>
                     <h3>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</h3>
                     <h3>{product.price}</h3>
                   </div>
                   <div className="button-container">
                    {cartItems.some((item) => item.id === product.id) ? (
                    <div
                        className="remove-from-cart"
                        onClick={() => removingItemFromCart(product)}
                    >
                        Remove from cart
                    </div>
                    ) : (
                    <div
                        className="add-to-cart"
                        onClick={() => addingItemToCart(product)}
                    >
                        Add to cart
                    </div>
                    )}
                    </div>
                    </div>
                    </div>
            ):(
                <div className='product-card'>
                        <div className='image-container'>
                            <img src={product.imgUrl} className='product-image' alt='product-image' />
                    <div>
                     <h3>{product.item}</h3>
                     <h3>{product.price}</h3>
                   </div>
                   <div className="button-container">
                    {cartItems.some((item) => item.id === product.id) ? (
                    <div
                        className="remove-from-cart"
                        onClick={() => removingItemFromCart(product)}
                    >
                        Remove from cart
                    </div>
                    ) : (
                    <div
                        className="add-to-cart"
                        onClick={() => addingItemToCart(product)}
                    >
                        Add to cart
                    </div>
                    )}
                    </div>
                    </div>
                    </div>
            )}
        </div>
    )
}

export default Products;