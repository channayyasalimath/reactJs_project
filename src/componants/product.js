

import React from 'react'
import classes from '../cssmodules/product.module.css'

class Product extends React.Component{
   
    constructor(props){
        super(props)
        this.state= {isShown: false}
        console.log("Construtor Initialized");

    }
    handelHideAndShow =()=> {
        this.setState({
            isShown: !this.state.isShown
        })
    }

    componentDidMount(){
       
        console.log("Component Did Mount");
        
    }

    shouldComponentUpdate(){
        console.log("wheather Should Component Invovked..?");
        return true
    }

    componentDidUpdate(){
        console.log("Compnent Did Update");
    }

    componentWillUnmount(){
        console.log("component Will Unmount");
    }

    render(){
        console.log(this.state);

        return(
            <div>
            <div className={classes.productContainer}>
          <div className={classes["product-card"]}>
         
          
          {this.state.isShown ? <Child /> : null}
          <button onClick={this.handelHideAndShow}>HideAndShow</button>
         </div> 
         
        </div>
        </div>
        )
    }
    
}

class Child extends React.Component{
    componentWillUnmount(){
        console.log("Child Component Unmounting");
    }
    render(){
        return(
            <div>
                <h3>Product Name: ProductName</h3>
          <p>Product Desc: Product Desc</p>
          <h5>Product Price: Product Price</h5>
            </div>
        )
    }
}
export default Product