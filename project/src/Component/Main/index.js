import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Result from '../../Pages/Result';
import './style.css'

const Main =({ name, monthlyPayment, year, changeName, changeMonthlyPayment, changeYear , result, handlerSumbit, Previous }  )=>(

	    <main id="main" > 
          <div className="card" >
	 	    { !result  && <h1 className="title"   >Simulador</h1>}
	 	
	 	    { !result   &&  
	 	      <Form
	 	        name={name}
	 	        monthlyPayment={monthlyPayment}
	 	        year={year} 
	 	        changeName ={changeName}
	 	        changeMonthlyPayment = {changeMonthlyPayment}
	 	        changeYear ={changeYear}
	 	        handlerSumbit ={handlerSumbit}
	 	      />
	        }

	        {
	          !!result &&
	          <Result
               name={name}
               monthlyPayment={monthlyPayment}
               year={year}
               result = {result}
               Previous = {Previous}
	          />
	        }
          </div>
	    </main>
)

Main.propTypes = {
    name: PropTypes.string.isRequired,
    monthlyPayment:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    result:PropTypes.number.isRequired,
    changeName:PropTypes.func.isRequired,
    changeMonthlyPayment:PropTypes.func.isRequired,
    changeYear:PropTypes.func.isRequired,
    handlerSumbit:PropTypes.func.isRequired,
    Previous:PropTypes.func.isRequired
}

export default Main;