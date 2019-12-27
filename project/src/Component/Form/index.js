'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

const Form = ({name, monthlyPayment, year, changeName, changeMonthlyPayment, changeYear, handlerSumbit})=>(
     		   <form id="form" >
                 <label>
                   Nome:
                  <input 
                   name="name"
                   value={name}
                   onChange={changeName}
                   />
                 </label>

                 <label>
                   Mensalidade:
                   <input
                    name="monthlyPayment"
                    type="number"
                    value={ monthlyPayment }
                    onChange={changeMonthlyPayment}
                    />
                 </label>
                 
                 <label>Tempo:
                  <select
                    name="year" 
                    value ={year}
                    onChange = {changeYear}
                  >

                    { 
                     Form.createArr(100).map( (item)=>{
                      return <option key={item} value={item}> {item} {item === 1 ? 'ano' : 'anos'} </option>
                     } )    
                    }

                  </select>
                 </label>
                 <Button  handlerSumbit={handlerSumbit}  > Simular </Button>

     		   </form>
);


Form.createArr = ( length )=>{
       const arr = [];
       for(let cont = 1;cont<=length;cont++){
         arr.push(cont);
       }
       return arr;
}


Form.propTypes = {
    name: PropTypes.string.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    changeName:PropTypes.func.isRequired,
    changeMonthlyPayment:PropTypes.func.isRequired,
    changeYear:PropTypes.func.isRequired,
    handlerSumbit:PropTypes.func.isRequired
}


export default Form;