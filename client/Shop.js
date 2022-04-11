import { Component, useState } from 'react';
import React from 'react';
import Header from './core/shop/Header'
import Main from './core/shop/Main';
import Basket from './core/shop/Basket';
import data from './core/shop/data';
import { Container, makeStyles } from '@material-ui/core';

///////////////////////////////////////////////
//////////////CODE FROM TUTORIAL///////////////
//found at https://www.youtube.com/watch?v=AmIdY1Eb8tY //

const useStyles = makeStyles(theme =>({
  App: {
    textAlign: "center",

    row: {
      display: "flex",
      justifyContent: "space-between"
  }
}

}));

function Shop() {

    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const classes = useStyles();

    const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if (exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
  
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id))
      } else {
        setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
  
      }
    }
  
    return (
      <div className={classes.App}>

        <Header countCartItems ={cartItems.length}></Header>
        <div className={classes.row}>
          <Main onAdd={onAdd} products={products}></Main>
          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}>
  
          </Basket>
        </div>
  
  
      </div>
    );
  
  }
  
  export default Shop;