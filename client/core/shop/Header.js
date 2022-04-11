import React from 'react';
import ReactDOM from 'react-dom';
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
      }
}))

export default function Header(props){
    const {countCartItems} = props;
    const classes = useStyles();

    return(
        <header className={classes.rowBlockCenter}>
            <div>
                <a href="#/">
                    <h1>Small Shopping cart</h1>
                </a>

            </div>
            <div>
                <a href="#/cart">

                Cart{' '}
                {countCartItems? (
                    <button className={classes.badge}>{countCartItems}</button>
                ): ('')
                }
                </a>
                <a href="#signin">Signin</a>
                </div>
                
        </header>
    );
}