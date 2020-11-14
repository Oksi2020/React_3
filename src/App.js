import React, { Component } from 'react';
import './App.css';

import { Toggler, TogglerItem } from './toggler/toggler';
import { Input } from './inupt/input';

let inputs = [{name:'inputValue', type: 'text', value: '', contentLength: true},
              {name:'Name', type: 'text', value: '', contentLength: true},
              {name:'Password', type: 'password', value: '', contentLength: true},
              {name:'Age', type: 'number', value: '', contentLength: true},
              {name:'Language', type: 'text', value: '', contentLength: true},

];

const convertedInputs = inputs.map(item => {
  if(item.type ==='text') return ({...item, contentMaxLength: 15}) ;
  if(item.type ==='password') return ({...item, contentMaxLength: 8});
  if(item.type ==='number') return ({...item, contentMaxLength: 10})
})
class App extends Component{

  state = {
    active: [
            {name:'Gender', act:'male'},
            {name: 'Layout',act:'left'}
      ],
      inputsConfig: convertedInputs
  }

  changeActive = (value, name) => _ => {
    let newActive = this.state.active.map(item => {
      if(item.name===name) {
        item.act = value
      }
      return item;
    })
    this.setState({active: newActive})
  }

  changeInput = (e) => {
      let item = this.state.inputsConfig.find(input => input.name === e.target.name);
      if( item.contentLength ) {
        let newValue = e.target.value;
        if(newValue.length === item.contentMaxLength) item.contentLength = false;

        let newConfig = this.state.inputsConfig.map(input=> {
          if(input.name === item.name) {
            input.value = newValue;
            if(item!==input) {
              input = item;
            }
          } 
          return input;
        });
        this.setState({
          inputsConfig: newConfig
        });
      } else {
        e.preventDefault();
      }
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render = () => {
    const { inputsConfig } = this.state;
    const { changeInput, submitForm } = this;

    return (
      <div className = 'app'>
        {/* --------------1--------------- */}
        {/* <Toggler 
          name = 'Gender' 
          active = {this.state.active} 
          action = {this.changeActive}
        >
          <TogglerItem value = 'male'>Male</TogglerItem>
          <TogglerItem value = 'female'>Female</TogglerItem>
        </Toggler>
        <Toggler 
          name = 'Layout' 
          active = {this.state.active} 
          action = {this.changeActive}
        >
          <TogglerItem value = 'left'>Left</TogglerItem>
          <TogglerItem value = 'center'>Center</TogglerItem>
          <TogglerItem value = 'right'>Right</TogglerItem>
          <TogglerItem value = 'baseline'>Baseline</TogglerItem>
        </Toggler> */}
        {/* ----------------------2-------------------- */}
        {/* <Input
          name = 'inputValue'
          type = 'text'
          value = {inputValue}
          placeholder = 'Write something please!'
          handler = {changeInput}
          contentLength = {true}
          contentMaxLength = {3}
        >
        </Input> */}
        {/* ---------------------3---------------- */}
        <form onSubmit = {submitForm}>
          <Input
            data = {inputsConfig.find(input=>input.name ==='Name')}
            placeholder = 'Write name!'
            handler = {changeInput}
          >
          </Input>
          <Input
            data = {inputsConfig.find(input=>input.name ==='Password')}
            placeholder = 'Write password!'
            handler = {changeInput}
          >
          </Input>
          <Toggler 
            name = 'Gender' 
            active = {this.state.active} 
            action = {this.changeActive}
          >
            <TogglerItem value = 'male'>Male</TogglerItem>
            <TogglerItem value = 'female'>Female</TogglerItem>
          </Toggler>
          <Input
            data = {inputsConfig.find(input=>input.name ==='Age')}
            placeholder = 'Write your age!'
            handler = {changeInput}
          >
          </Input>
          <Toggler 
            name = 'Layout' 
            active = {this.state.active} 
            action = {this.changeActive}
          >
            <TogglerItem value = 'left'>Left</TogglerItem>
            <TogglerItem value = 'center'>Center</TogglerItem>
            <TogglerItem value = 'right'>Right</TogglerItem>
            <TogglerItem value = 'baseline'>Baseline</TogglerItem>
          </Toggler>
          <Input
            data = {inputsConfig.find(input=>input.name ==='Language')}
            placeholder = 'What is your favourite language?'
            handler = {changeInput}
          >
          </Input>
          <button>Submit!</button>
        </form> 
      </div>
    );
  }

}

export default App;
