import React from 'react';
import ReactDOM from 'react-dom';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    rowBlockCenter: {
        background: "#C8A2C8",
        display:"flex",
        justifyContent:"space-between",
    },
    badge: {
        backgroundColor: "#FF0000",
        border: "none",
        color: "#ffffff",
        width: "1.5rem",
        borderRadius: "1.5rem"
      }
}))

export default function Header(props){
    const {countCartItems} = props;
    const classes = useStyles();

    return(
        <header className={classes.rowBlockCenter}>
            <div>
                <a href="#/">
                    <h1>Love-for-the-Uglies</h1>
                </a>

            </div>
            <div>

                Cart{' '}
                {countCartItems? (
                    <button className={classes.badge}>{countCartItems}</button>
                ): ('')
                }
                
                
                </div>
                
        </header>
    );
}