import React from 'react';
import ReactDOM from 'react-dom';
import {makeStyles } from '@material-ui/core';




const Imgcard = (props) =>{

    

    

    return(
    <div>
        <div>
            <img src={props.img} width={194} height={150}/>
            <div>
                <h5>{props.nme}</h5>
                <p>{props.price}</p>
            </div>
        </div>
    </div>
    );
}

export default Imgcard;