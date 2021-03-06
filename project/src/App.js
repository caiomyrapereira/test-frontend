import React , {Fragment} from 'react';
import ajax from '@fdaciuk/ajax';
import Header from './Component/Header';
import Main  from  './Component/Main';

class App extends React.Component{
    
    constructor(){
    	super();
      this.state={
        name:'',
        monthlyPayment:'',
        year:1,
        result:0
      }     
    }

    changeName(e){
       this.setState({name:e.target.value});
    }

    changeMonthlyPayment(e){
       this.setState({monthlyPayment:e.target.value});
    }

    changeYear(e){
       this.setState({year:Number(e.target.value)});
    }

    handlerSumbit(e){
       e.preventDefault();
       const { monthlyPayment , year  } = this.state;
       ajax().post('http://api.mathjs.org/v4/.',{expr:`${monthlyPayment} * (((1 + 0.00517) ^ ${year*12} - 1) / 0.00517)`})
       .then((response)=>{
         if(!!this.state.name)
         this.setState({ result: Number(response.result) });
       })
    }
    
    Previous(e){
      e.preventDefault();    
      this.setState({
        name:'',
        monthlyPayment:'',
        year:1,
        result:0
      });
    }


    render(){
      return ( 
    	<Fragment>
          <Header />
          <Main 
           name={this.state.name}
           monthlyPayment = {this.state.monthlyPayment}
           year ={this.state.year}
           changeName = {(e)=> this.changeName(e) }
           changeMonthlyPayment = {(e) => this.changeMonthlyPayment(e) }
           changeYear = {(e) => this.changeYear(e) }
           result = {this.state.result}
           handlerSumbit = {(e)=>this.handlerSumbit(e)}
           Previous = {(e)=>this.Previous(e)}
          />
        </Fragment>
      );
    }

}


export default App;