'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Form = ({nome, mensalidade, anos, changeNome, changeMensalidade, changeAnos, handlerSumbit})=>(
     		   <form id="form" onSubmit={handlerSumbit} >

                 <label>
                   Nome:
                  <input 
                   nome="nome"
                   value={nome}
                   onChange={changeNome}
                   />
                 </label>

                 <label>
                   Mensalidade:
                   <input
                    name="mensalidade"
                    type="number"
                    value={ mensalidade }
                    onChange={changeMensalidade}
                    />
                 </label>
                 
                 <label>Tempo:
                  <select
                    name="anos" 
                    value ={anos}
                    onChange = {changeAnos}
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


Form.propTypes = {
    nome: PropTypes.string.isRequired,
    mensalidade: PropTypes.number.isRequired,
    anos:PropTypes.number.isRequired,
    changeNome:PropTypes.func.isRequired,
    changeMensalidade:PropTypes.func.isRequired,
    changeAnos:PropTypes.func.isRequired,
    handlerSumbit:PropTypes.func.isRequired
}


export default Form;