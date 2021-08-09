import React from 'react';
import PropTypes from "prop-types";
import { isConstructorDeclaration } from 'typescript';

class  App extends React.Component {
  state={
    count:0
  }

  add = () => {
    this.setState({count:1})
  }

  minus = () => {
    this.setState({count:-1})
  }

  render(){  //react는 자동적으로 render실행
    return (
    <div>
      <h1>count :  {this.state.count}</h1>
      <button onClick= {this.add}> add </button>
      <button onClick= {this.minus}> minus </button>
    </div>)
  }
}

export default App;
