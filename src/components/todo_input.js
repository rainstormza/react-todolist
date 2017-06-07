import React, { Component } from 'react';

class TodoInput extends Component {

  constructor(props) {
    super(props);

    this.state = {input: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this.props);
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          Task : <input
            value={this.state.input}
            onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    if(this.state.input !== '') {
      console.log(this.state.input);
      this.props.addtodo(this.state.input);
      this.setState({input: ''});
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }
}

export default TodoInput;
