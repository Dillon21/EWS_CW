import * as React from 'react';
import Cardo from './Cardo'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    rowBlockCenter: {
        background: "#82A9C5",
        display:"flex",

        justifyContent: "center",
        gridTemplateColumns: "auto",
        flexDirection: "column"

    },
    badge: {
        backgroundColor: "#82A9C5",
        border: "none",
        color: "#82A9C5",
        width: "1.5rem"
      },
      row: {
        display: "flex",
        justifyContent: "center",
        
        background: "#82A9C5",
        minWidth: "1300px"
    }
}))

export default function Reviews(props) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const{products} = props;

  return(
      //Code did not produce usable object
      //could not convert object
    <div className={classes.row}>
             {products.map((product) => (
                <Cardo key ={product.id} product={product}></Cardo>
            ))} 
    </div>
  );
}

