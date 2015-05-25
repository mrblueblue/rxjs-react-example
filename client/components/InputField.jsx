'use strict'

import React from 'react';
import Rx from 'rx';

export class InputField extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input:''
    };
  }

  render(){
    return (
      <input type="text" 
        onKeyUp={this.handleChange.bind(this)} 
      />
    );
  }

  handleChange(event){
    this.setState({input: event.target.value})
    console.log(this.state.input);
  }

};
