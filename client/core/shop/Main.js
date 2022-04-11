import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    rowBlockCenter: {
        background: "#e0e0e0",
        display:"flex",
        justifyContent:"space-between",
        padding: "1rem",
        margin: "0.5rem",
        borderRadius: "0.5rem"
    },
    badge: {
        backgroundColor: "#f04040",
        border: "none",
        color: "#ffffff",
        width: "1.5rem"
      },
      row: {
        display: "flex",
        justifyContent: "space-between"
    }
}))

export default function Main(props) {
    const{products,onAdd} = props;
    const classes = useStyles();

    return (<main className={classes.rowBlockCenter}>
        <h2>Products</h2>
        <div className={classes.row}>
            {products.map((product) => (
                <Product key ={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </main>
    );


}