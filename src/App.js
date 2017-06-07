import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, title: '111', description: '111', date: new Date().toLocaleTimeString()},
        {id: 2, title: '222', description: '222', date: new Date().toLocaleTimeString()},
        {id: 3, title: '333', description: '333', date: new Date().toLocaleTimeString()},
      ],
    };
    console.log(this.state);
    // this.state.todos.push({id:4});

  }

  addTodo(val){
    console.log('addtodo', val);

    const todo = {
      id: Math.floor((Math.random() * 100) + 1), //1-100
      title: val,
      description: val + '555',
      date: new Date().toLocaleTimeString()
    }
    // Update data
    this.state.todos.push(todo);
    // Update state
    this.setState({todos: this.state.todos});
  }

  deleteTodo(id) {
    console.log(id);
  }

  test(test) {
    console.log('test',test);
    console.log(this.state);
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          To do list - Web Application
        </p>

        {/* <button onClick={e => this.test(e)}>Test</button> */}

        <TodoInput addtodo={this.addTodo.bind(this)} />
        <br/>
        <TodoList todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
