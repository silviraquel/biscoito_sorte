import React, { Component } from 'react';
import Botao from './components/Botao';
import  './index.css';
import './estilo.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {};
      

  }


  render(){
    return(
      <div className='container'>
        <img  src={require('./assets/biscoito.png')} className='img' />
        <Botao />
        <h3 className='textoFrase'> Frase número 1 aleatória...</h3>
      </div>
    );
  }

}

export default App;
