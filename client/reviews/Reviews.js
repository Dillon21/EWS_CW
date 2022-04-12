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
        alignItems: "center",
        background: "#82A9C5",
    }
}))

export default function Reviews(props) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const{products,onAdd} = props;

  return(

    <div className={classes.row}>
             {products.map((product) => (
                <Cardo key ={product.id} product={product} onAdd={onAdd}></Cardo>
            ))} 
    </div>
  );
}