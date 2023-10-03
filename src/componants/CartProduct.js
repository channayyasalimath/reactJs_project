
import styles from '../cssmodules/cartproduct.module.css'
import { useState, useEffect } from 'react';

function CartProduct(props){

    const [quantity, setQuantity]= useState(0)
    const [show, setShow]= useState(true)
    console.log(quantity);
    const IncreaseQuantity =()=>{
        setQuantity(quantity + 1)
    }
    const DecreaseQuantity =()=>{
        setQuantity(quantity - 1)
    }
    useEffect(()=> {
        console.log("use Effect called for quantity");
        document.title= quantity + '-' +(show ? 'its showing' : 'Its not')
    }, [])

    const handelToggle =() =>{
        setShow(!show)
    }
    return(
        <div>
        <div className={styles.productContainer}>
      <div className={styles['product-card']}>
     <h3>Product Name: Cart Product</h3>
      <p>Product Desc: Cart Product Desc</p>
      {show ?<h5>Product Price: Cart Product Price</h5>: null}
      <h5>Product Quantity: {quantity}</h5>
      <button onClick={IncreaseQuantity}>Increase Quantity</button>
      <button onClick={DecreaseQuantity}>Decrease Quantity</button>
      <button onClick={handelToggle}>HideAndShow</button>
     </div> 
     
    </div>
    </div>
    )
}

export default CartProduct