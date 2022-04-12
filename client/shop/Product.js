import React from 'react';
import ReactDOM from 'react-dom';
import { Container, makeStyles } from '@material-ui/core';
import data from './data';
import Imgcard from './Imgcard';
import { indexOf } from 'lodash';

//https://www.youtube.com/watch?v=B0E2esA5nQo&t=595s

//Code tutorial from youtube video below
//https://www.youtube.com/watch?v=AmIdY1Eb8tY
//Code was converted from HTML in video into react code

export default function Product(props) {
    
    const{countCartItems,product,onAdd} = props;
    
    //Styling and formatting
    const useStyles = makeStyles(theme =>({
      btnColor: {
        'font-size': '0.8rem',
        padding: '0.2rem',
        margin: '0.1rem',
        borderRadius: '2px',
        border: '0.1rem #404040 solid',
        backgroundColor: '#f3c4d3',
        width:200,
        cursor: 'pointer'
    },
      media:{
        minHeight: 150
      },

      space: {
        margin:'2rem'
      },

      small: {
        maxHeight: '8rem'
      },
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
      },
      img:{
        maxWidth:150
      }



  }))
    
    //grab styling from local vairable
    const classes = useStyles();
    console.log(data.products)
    
    return(
            <div>
            {/*Send single index of data array into Imgcard element*/}
          <Imgcard img={product.img} nme={product.nme} price={product.price} />
            <button className={classes.btnColor} onClick={() => onAdd(product)}>add to cart</button>
            </div>
         
)
  
}
