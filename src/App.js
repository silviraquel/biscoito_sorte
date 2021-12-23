import React, { Component } from 'react';
import Botao from './components/Botao';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {};

  }


  render(){
    return(
      <div>
        <img  src={require('./assets/biscoito.png')} />
        <Botao />
      </div>
    );
  }

}

export default App;
