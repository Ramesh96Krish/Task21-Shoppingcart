import Title from "./Components/title/title";
import Index from "./Components/index";
import Home from "./Components/home/home";
import Copright from "./Components/copyright/copyright";
import { useState } from "react";

function App() {

    const [cartItems, setCartItems] = useState([]);
    

    const addToCart = (newItem) => {
        setCartItems((cartItems) => [...cartItems, newItem]);
    }
     
    const removeFromCart = (itemToBeRemoved) => {
        setCartItems((cartItems) =>
          cartItems.filter((item) => item.id !== itemToBeRemoved.id)
        );
      };

  let products_list = [
    {
        item: 'Fancy Product',
        price: '$40.00 - $80.00',
        special: 'normal',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNEjYQi-9MY7PxfznjUYAdSvgVGxtQOLiZg&usqp=CAU",
        id: 1,

    },
    {
        item: 'Special Item',
        price: '$20.00 $18.00',
        special: 'special',
        offer: 'yes',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQor5pn6OsHgS2KoIHbZ-l7LMUdUnA-dDb3Q&usqp=CAU",
        id: 2,

    },
    {
        item: 'Sale Item',
        price: '$50.00 $25.00',
        special: 'normal',
        offer: 'yes',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ujvcnRTScS6pSAR9dxFl-YZia_kSltkctw&usqp=CAU",
        id: 3,

    },
    {
        item: 'Popular Item',
        price: '$40.00',
        special: 'special',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJNh_ptgb_AUP485p-xm_LUqbZvrGLWXwkg&usqp=CAU",
        id: 4,

    },
    {
        item: 'Sale Item',
        price: '$50.00 $25.00',
        special: 'normal',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB4lXbznlycCFvBdz49PXUYWShO8cnquQXw&usqp=CAU",
        id: 5,

    },
    {
        item: 'Fancy Product',
        price: '$120.00 - $280.00',
        special: 'normal',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrBTzjzg58Veczuy4t0z6VOGxSlx4gNVdEw&usqp=CAU",
        id: 6,

    },
    {
        item: 'Special Item',
        price: '$20.00 $18.00',
        special: 'special',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesnjEc4Qpq5ZHESpsY3gvdpzR30bnHhRH_A&usqp=CAU",
        id: 7,

    },
    {
        item: 'Popular Item',
        price: '$40.00',
        special: 'special',
        offer: 'none',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vV9Z8cZhxLV1Qq0OJS5hwvhJ7mIWQ6-oJKxu_QBryNvZRvu875EVRjbdllntLyj1h-A&usqp=CAU",
        id: 8,

    },
]

  return (
    <div className="App">
      <Title cartCount={cartItems.length}/>
      <Index />
      <Home
      product={products_list}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cartItems={cartItems}
      />
      <Copright />
    </div>
  );
}

export default App;
