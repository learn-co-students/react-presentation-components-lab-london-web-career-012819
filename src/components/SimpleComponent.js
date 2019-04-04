// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  handleClick = (event) => {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else if (this.state.mood === 'sad') {
      this.setState({
        mood: 'happy'
      })
    }
  }


  render() {
    console.log(this.state)
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
