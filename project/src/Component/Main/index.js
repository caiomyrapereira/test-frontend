'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import './style.css'

const Main =({ nome, mensalidade, anos, resultado }  )=>(

	  <main id="main" > 
       
	 	{ !resultado  && <h1 className="title"   >Simulador</h1>}
	 	
	 	{ !resultado   &&  
	 	 <Form
	 	   nome={nome}
	 	   mensalidade={mensalidade}
	 	   anos={anos} 
	 	  />
	     }
       
	  </main>
)

Main.propTypes = {
    nome: PropTypes.string.isRequired,
    mensalidade:PropTypes.number.isRequired,
    anos:PropTypes.number.isRequired
}

export default Main;