'use strict';

import React from 'react';
import './style.css';

const Button =(props)=>(
       <button className={'button'} onClick={props.handlerSumbit} type="submit"> {props.children} </button>
);

export default Button;