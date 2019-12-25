import React from 'react';
import Header from './Component/Header';
import Main  from  './Component/Main';

class App extends React.Component{
    
    constructor(){
    	super();
      this.state={
        nome:'',
        mensalidade:0,
        anos:0,
        resultado:null
      }     
    }
     
    render(){
      return ( 
    	<div className = "App" >
          <Header />
          <Main 
           nome={this.state.nome}
           mensalidade = {this.state.mensalidade}
           anos ={this.state.anos}
           resultado = {this.state.resultado}
          />
        </div>
      );
    }

}



export default App;