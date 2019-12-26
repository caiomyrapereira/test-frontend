import React from 'react';
import ajax from '@fdaciuk/ajax';
import Header from './Component/Header';
import Main  from  './Component/Main';

class App extends React.Component{
    
    constructor(){
    	super();
      this.state={
        nome:'',
        mensalidade:0,
        anos:1,
        resultado:0
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
           changeNome = {(e)=> this.setState({nome:e.target.value})}
           changeMensalidade = {(e) => this.setState({mensalidade:Number(e.target.value)}) }
           changeAnos = {(e) => this.setState({anos:Number(e.target.value)}) }
           resultado = {this.state.resultado}
           handlerSumbit = {(e)=>{
             e.preventDefault();
             const { mensalidade , anos  } = this.state;
             ajax().post('http://api.mathjs.org/v4/.',{expr:`${mensalidade} * (((1 + 0.00517) ^ ${anos*12} - 1) / 0.00517)`})
             .then((response)=>{
               this.setState({ resultado: Number(response.result) });
             })


             /*
             this.setState( {resultado: mensalidade * (((1 + 0.00517) ^anos * 12  - 1) / 0.00517)  } ,
              ()=> console.log(this.state.resultado) 
               )
             */
           }}
          />
        </div>
      );
    }

}



export default App;