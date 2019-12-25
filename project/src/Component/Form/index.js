'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Form = ({nome,mensalidade,anos})=>(
     		   <form id="form" onSubmit={(e)=>e.preventDefault() } >

                 <label>
                   Nome:
                  <input 
                   nome="nome"
                   defaultValue={nome} 
                   />
                 </label>

                 <label>
                   Mensalidade:
                   <input
                    name="mensalidade"
                    type="number"
                    defaultValue={mensalidade}
                    />
                 </label>
                 
                 <label>Tempo:
                  <select
                    name="anos" 
                    defaultValue={anos} 
                  >

                    { 
                     Form.createArr(100).map( (item)=>{
                      return <option key={item} value={item}> {item} {item === 1 ? 'ano' : 'anos'} </option>
                     } )    
                    }

                  </select>
                 </label>

                 <button className="simular" type="submit"> Simular </button>

     		   </form>
);


Form.createArr = ( length )=>{
       const arr = [];
       for(let cont = 1;cont<=length;cont++){
         arr.push(cont);
       }
       return arr;
}

/* depois vejo isso  propTypes */

Form.propTypes = {
    nome: PropTypes.string.isRequired,
    mensalidade: PropTypes.number.isRequired,
    anos:PropTypes.number.isRequired,
}


export default Form;