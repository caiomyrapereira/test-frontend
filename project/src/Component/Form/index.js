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
      
     createArr( length ){
       const arr = [];
       for(let cont = 1;cont<=length;cont++){
         arr.push(cont);
       }
       return arr;
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
                     this.createArr(100).map( (item)=>{
                      return <option key={item} value={item}> {item} {item === 1 ? 'ano' : 'anos'} </option>
                     } )    
                    }
                
                  </select>
                 </label>

                 <button className="simular" type="submit"> Simular </button>

     		   </form>
     	      );
     }

} 


export default Form;