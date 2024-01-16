import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      postion:""
    }
    this.default = {
      num: this.state.num
    }
  }
  inCrement = () => {
    this.setState((state) => ({
      num: this.state.num + 1,
    }))
  }
  deCrement = () => {
    this.setState((state) => ({
      num: this.state.num - 1,
    }))
  }
  random = () => {
    this.setState((prev) => ({
      num: this.state.num * 0 + Math.round(Math.random() * 10),
    }))
  }
  reset = () => {
    this.setState(prev=>(
      {
        num: this.default.num
      }
    ))
  }
  inputChange = (e) =>{
    this.setState(prev=>({
      postion: e.target.value
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.inCrement}>inCrement</button>
        <button onClick={this.deCrement}>deCrement</button>
        <button onClick={this.random}>random</button>
        <button onClick={this.reset}>reset</button>
        <h2>{this.state.postion}</h2>
        <input type="text" onChange={this.inputChange} />
      </div>
    )
  }
}
export default Counter
