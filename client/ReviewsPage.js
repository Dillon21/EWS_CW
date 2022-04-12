import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import { Link } from 'react-router-dom'
import Reviews from './reviews/Reviews'
import data from './shop/data';



const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }

}));

/* get data for reviews page*/
/*not currently functioning fully*/
/* sends away correct number of elements to be made into cards*/
/*output is not convertable to card data */

function ReviewsPage() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const classes = useStyles()

    
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
          setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

    return (
        <Paper className={classes.root} elevation={4}>

            {/*should have*/}
            {/* Important and should have been implemented as customer reviews would be crutial*/}
            <Button>
                Add Review
            </Button>
            
            <Typography variant="h6" className={classes.title}>
                Reviews page
            </Typography>
            
            {/*push products data to reviews component*/}
            {/*not carrying data that is convertable*/}
            {/* i was unable to convert from object*/}
            <Reviews onAdd={onAdd} products={products}></Reviews>

        </Paper>


    )


}
export default ReviewsPage;