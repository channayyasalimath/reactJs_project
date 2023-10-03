import React from 'react';

import Product from './componants/product';
import CartProduct from './componants/CartProduct'


function App() {
// logger("hello Channayya")
//   var products= [{
//     productName: "Puma SportZ",
//     description: "Made for sports",
//     price: 4999
//   }, {
//     productName: "Nike Sneaker",
//     description: "Amazing sneaker designed",
//     price: 3999
//   }, {
//     productName: "Adidas SportZ",
//     description: "Amazing shoes made for Sports",
//     price: 5999
//   }]

//    products= isArrayEmpty(products) ? []:  products

//   logger(products)
  
  return (
    // <div className='productContainer'>
    //   {/* {products.map(record=>  <div className='product-card'>
    //  <h3>Product Name: {record.productName}</h3>
    //   <p>Product Desc: {record.description}</p>
    //   <h5>Product Price: {record.price}</h5>
    //  </div> )} */}
    //  <Product products= {products}/>
    // </div>
    <div>
      <Product sample = "Hello Channayya"/>
    <CartProduct />
    </div>
  );
}

export default App;
