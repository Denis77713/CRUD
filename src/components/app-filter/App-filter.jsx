import React from "react"

class AppFilter extends React.Component {
  // Поднять текущее значение
  addAttribute = (e) => {
    const name = [e.target.name]
    this.props.onClickUpdate(name)
  }
  render() {
    const dataButton = [
      { name: "all", content: "Все сотрудники" },
      { name: "up", content: "На повышение" },
      { name: "bigManey", content: "З/П больше 1000$" },
    ]
    const buttonElement = dataButton.map(({ name, content }) => {
      const active = this.props.filterAttribute === name
      const clazz = active ? "btn-light" : "btn-outline-light"
      return (
        <button
          className={`btn ${clazz}`}
          key={name}
          name={name}
          onClick={this.addAttribute}
        >
          {content}
        </button>
      )
    })
    return (
      <div className="btn-group mt-4">
        {buttonElement}
      </div>
    )
  }
}

export default AppFilter