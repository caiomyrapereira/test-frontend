import React from 'react';
import Header from './Component/Header';
import Main  from  './Component/Main';

class App extends React.Component{
    
    constructor(){
    	super();
    }
     
    render(){
      return ( 
    	<div className = "App" >
          <Header />
          <Main />
        </div>
      );
    }

}

export default App;