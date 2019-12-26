'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import './style.css'

const Main =({ nome, mensalidade, anos, changeNome, changeMensalidade, changeAnos , resultado, handlerSumbit }  )=>(

	  <main id="main" > 
       
	 	{ !resultado  && <h1 className="title"   >Simulador</h1>}
	 	
	 	{ !resultado   &&  
	 	 <Form
	 	   nome={nome}
	 	   mensalidade={mensalidade}
	 	   anos={anos} 
	 	   changeNome ={changeNome}
	 	   changeMensalidade = {changeMensalidade}
	 	   changeAnos ={changeAnos}
	 	   handlerSumbit ={handlerSumbit}
	 	  />
	     }

	     {
	       !!resultado &&
	       <div>
	       <h1>Olá {nome}</h1>
	       <p>juntado R${mensalidade} todos més,
	       voce terá R${resultado} em {anos}anos</p>
           <button>Simular Novamente</button>
	       </div>	
	     }
       
	  </main>
)

Main.propTypes = {
    nome: PropTypes.string.isRequired,
    mensalidade:PropTypes.number.isRequired,
    anos:PropTypes.number.isRequired,
    resultado:PropTypes.number.isRequired,
    changeNome:PropTypes.func.isRequired,
    changeMensalidade:PropTypes.func.isRequired,
    changeAnos:PropTypes.func.isRequired,
    handlerSumbit:PropTypes.func.isRequired
}

export default Main;