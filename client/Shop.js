import { Component, useState } from 'react';
import React from 'react';
import Header from './shop/Header'
import Main from './shop/Main';
import Basket from './shop/Basket';
import data from './shop/data';
import Paper from '@material-ui/core/Paper';
import { Container, makeStyles } from '@material-ui/core';

///////////////////////////////////////////////
//////////////CODE FROM TUTORIAL///////////////
//found at https://www.youtube.com/watch?v=AmIdY1Eb8tY //

const useStyles = makeStyles(theme =>({
  App: {
    textAlign: "center",

    row: {
      display: "flex",
      
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
      <Paper className={classes.root} elevation={4}>
      <div className={classes.App}>

        
        <div className={classes.row}>
          <Main onAdd={onAdd} products={products}></Main>

          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}>
  
          </Basket>
        </div>
  
  
      </div>
      <Header countCartItems ={cartItems.length}></Header>
      </Paper>
    );
  
  }
  
  export default Shop;