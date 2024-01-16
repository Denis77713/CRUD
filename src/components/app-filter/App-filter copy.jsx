import React from "react"

class AppFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attribute: "",
      arr: [
        "btn btn-light btn-filter",
        "btn btn-outline-light btn-filter",
        "btn btn-outline-light btn-filter",
      ],
    }
  }
  // Поднять текущее значение
  addAttribute = (e) => {
    const name = [e.target.name]
    this.setState({
      attribute: name,
    })
    this.props.onClickUpdate(name)
    this.setState({
      arr: this.state.arr.map((a, i) => {
        if (+e.target.id === i) {
          return "btn btn-light btn-filter"
        }
        return "btn btn-outline-light btn-filter"
      }),
    })
  }
  render() {
    return (
      <div className="btn-group mt-4">
        <button
          id="0"
          className={this.state.arr[0]}
          name="all"
          type="button"
          onClick={this.addAttribute}
        >
          Все сотрудники
        </button>
        <button
          id="1"
          className={this.state.arr[1]}
          name="up"
          type="button"
          onClick={this.addAttribute}
        >
          На повышение
        </button>
        <button
          id="2"
          className={this.state.arr[2]}
          name="bigManey"
          type="button"
          onClick={this.addAttribute}
        >
          З/П больше 1000$
        </button>
      </div>
    )
  }
}

export default AppFilter
