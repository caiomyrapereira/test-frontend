'use strict';

import React from 'react';
import './style.css';

class Form extends React.Component{
     
     constructor(){
     	super();
     	this.state = {
           name:'',
           mensalidade:'',
           anos:'1'
     	}
     }


     render(){
     	return(
     		   <form id="form" onSubmit={(e)=>e.preventDefault() } >

                 <label>
                   Nome:
                  <input 
                   name="name"
                   value={this.state.name}
                   onChange ={ (e)=> this.setState({name:e.target.value}) }         
                   />
                 </label>

                 <label>
                   Mensalidade:
                   <input
                    name="mensalidade"
                    type="number"
                    value={this.state.mensalidade}
                    onChange={ (e)=> this.setState({mensalidade:e.target.value}) }
                    />
                 </label>
                 
                 <label>Tempo:
                  <select
                    name="anos" 
                    value={this.state.anos} 
                    onChange={(e)=>this.setState({anos:e.target.value})} 
                  >
                    { 
                     
                    }
                    <option value='1'> 1 ano </option>
                    <option value='2'> 2 anos </option>
                    <option value='3'> 3 anos </option>
                    <option value='4'> 4 anos </option>
                    <option value='5'> 5 anos </option>
                    <option value='6'> 6 anos </option>   
                    <option value='7'> 7 anos </option>
                    <option value='5'> 8 anos </option>
                    <option value='6'> 9 anos </option>   
                    <option value='7'> 10 anos </option>
                  </select>
                 </label>

                 <button className="simular" type="submit"> Simular </button>

     		   </form>
     	      );
     }

} 


export default Form;