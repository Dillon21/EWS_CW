import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import { Container, makeStyles } from '@material-ui/core';
import injectSheet from 'react-jss';
import { VerticalAlignCenter } from '@material-ui/icons';



const useStyles = makeStyles(theme =>({
    rowBlockCenter: {
        background: "82A9C5",
        display:"flex",

        justifyContent: "center",
        gridTemplateColumns: "auto",
        flexDirection: "column"

    },
    badge: {
        backgroundColor: "82A9C5",
        border: "none",
        color: "82A9C5",
        width: "1.5rem"
      },
      row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "82A9C5",
    }
}))

export default function Main(props) {
    const{products,onAdd} = props;
    const classes = useStyles();

    return (
        <div>
        <div style={{backgroundColor:"82A9C5"}}>
            <h2>Products</h2>
            <h3>Is your pet ugly? why not give it some style</h3>
            </div>
        <div>
        {/* <main className={classes.rowBlockCenter}></main> */}
        <div className={classes.row}>
             {products.map((product) => (
                <Product key ={product.id} product={product} onAdd={onAdd}></Product>
            ))} 
            
        </div>
    
    </div>
    </div>
    );


}