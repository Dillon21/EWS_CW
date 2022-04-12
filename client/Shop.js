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

  //Code to forward status of array variable from datafile
  //containing img's and names of the files
    const { products } = data;
    //cartItems carries the number of items in th cart
    const [cartItems, setCartItems] = useState([]);
    const classes = useStyles();

    // add quantity to basket display in bottom right od shop screen
    const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if (exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    //remove 1 from basket display in show screen
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id))
      } else {
        setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
  
      }
    }
  
    return (
      //set first container
      <Paper className={classes.root} elevation={4}>
      <div className={classes.App}>

        
        <div className={classes.row}>
          {/*call Main funtion to split the data array into seperate values for basket*/}
          <Main onAdd={onAdd} products={products}></Main>

          {/*add and remove from basket*/}
          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}>
  
          </Basket>
        </div>
  
  
      </div>

      {/*called header but it is footer containing the current amount in basket and checkout button.*/ }
      <Header countCartItems ={cartItems.length}></Header>
      </Paper>
    );
  
  }
  
  export default Shop;