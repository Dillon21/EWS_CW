import React from 'react';
import ReactDOM from 'react-dom';
import { Container, makeStyles } from '@material-ui/core';
import { VerticalAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
    blockCol1:{
        backgroundColor: "#C8A2C8",

        flex:"1"
    },
    row:{
        display: "flex",
        justifyContent: "center"
    },
    add: {
        color: "#C8A2C8",
        width: "1.5rem"
      },
    remove: {
        backgroundColor: "#C8A2C8",
        width: "1.5rem"
      },

    col1:{
        flex:1
    },

    col2: {
        flex:2,
        textAlign: "center",
        VerticalAlign: "baseline"
    },

    col2tr:{
        flex:2,
        textAlign: "left"
    },

    col1tr:{
        flex:1,
        textAlign: "left"
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
        <p>Cart Items</p>
        <div>
        
            {cartItems.length === 0 && <div>Cart is empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className={classes.row}>
                
                <div className={classes.col2}>
                    {item.nme}
                    <button onClick={() => onAdd(item)} className={classes.add}>+</button>
                    <button onClick={() => onRemove(item)} className={classes.onRemove}>-</button>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr/>
            <div className={classes.row}>
                <div className={classes.col2}>Items Price: ${itemsPrice.toFixed(2)}</div>
                
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