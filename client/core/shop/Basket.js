import React from 'react';
import ReactDOM from 'react-dom';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    blockCol1:{
        backgroundColor: "#e0e0e0",
        padding:"1rem",
        margin: "0.5rem",
        borderRadius: "0.5rem",
        flex:"1"
    },
    row:{
        display: "flex",
        justifyContent: "space-between"
    },
    add: {
        backgroundColor: "#40c0f0",
        width: "1.5rem"
      },
    remove: {
        backgroundColor: "#f04040",
        width: "1.5rem"
      },

    col1:{
        flex:1
    },

    col2: {
        flex:2
    },

    col2tr:{
        flex:2,
        textAlign: "right"
    },
    col1tr:{
        flex:1,
        textAlign: "right"
    }
    
    
}))

export default function Basket(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a,c) => a +c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const classes = useStyles();

    return (<aside className={classes.blockCol1}>
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className={classes.row}>
                <div className={classes.col2}>{item.name}</div>
                <div className={classes.col2}>
                    <button onClick={() => onAdd(item)} className={classes.add}>+</button>
                    <button onClick={() => onRemove(item)} className={classes.onRemove}>-</button>
                </div>
                <div className={classes.col2tr}>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className={classes.row}>
                <div className={classes.col2}>Items Price</div>
                <div className={classes.col1tr}>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className={classes.row}>
                <div className={classes.col2}>Tax Price</div>
                <div className={classes.col1tr}>${taxPrice.toFixed(2)}</div>
            </div>
            <div className={classes.row}>
                <div className={classes.col2}>Shipping Price</div>
                <div className={classes.col1tr}>${shippingPrice.toFixed(2)}</div>
            </div>
            <div className={classes.row}>
                <div className={classes.col2}><strong>Total Price</strong></div>
                <div className={classes.col1tr}>${totalPrice.toFixed(2)}</div>
            </div>
            <hr/>
            <div className={classes.row}>
                <button onClick={() => alert('implement Checkout')}>
                    Checkout
                </button>
                    </div> 
            </>
        )}
    </aside>
    );
}