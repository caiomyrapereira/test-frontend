import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Component/Button';
import './style.css';

const Result = ({ name, monthlyPayment, year, result, Previous }) =>(
	   <div className="result" >
	     <h1>Olá {name}</h1>
	     <p>
	      juntado R${monthlyPayment} todos més,
	      voce terá R${result} em {year}anos
	     </p>
         <Button handlerSumbit={Previous} >Simular Novamente</Button>
	   </div>	
);

Result.propTypes = {
	Previous:PropTypes.func.isRequired
};

export default Result;