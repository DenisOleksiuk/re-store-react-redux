import React, { Component } from 'react';

class ErrorButton extends Component {
  state = {
    error: false
  }

  render() {
    if (this.state.error) {
      this.foo.bar();
    }

    const style = {
      backgroundColor: 'red',
      width: '50px',
      height: '50px',
      cursor: 'pointer'
    };

    return (
      <div>
        <button onClick={() => this.setState({error: true})} style={style}>Error</button>
      </div>
    );
  }
}

export default ErrorButton;
