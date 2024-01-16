import React from "react"
import "./employees-list-item.scss"
//
//
// index - это номер обьекта, значение которого меняем
// data - основной массив с обьектами который отрисовываем
// cookie - премия false или true
class EmplouersListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cookie: false,
      star: false,
    }
  }
  //
  //
  activeCookie = () => {
    this.setState((prev) => ({
      cookie: !this.state.cookie,
    }))
  }
  addLike = () => {
    this.setState((prev) => ({
      star: !this.state.star,
    }))
  }
  //
  //
  render() {
    let { name, maney } = this.props
    let styleCookie = "list-group-item d-flex justify-content-between"
    let styleStar = "bi bi-star list-group-item fa-star"
    //
    //
    if (this.props.cookie) {
      styleCookie += " increase"
    }
    if (this.props.star) {
      styleStar = "bi bi-star list-group-item fa-star like"
    }
    //
    //
    return (
      <li className={styleCookie}>
        <span
          onClick={() => this.props.setStar(this.props.index)}
          className="list-group-item-label"
        >
          {name}
        </span>
        <input
          className="list-group-item-input"
          type="text"
          defaultValue={`${maney} $`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="button btn-cookie btn-sm"
            onClick={this.props.setCookie}
          >
            <i className="bi bi-cookie"></i>
          </button>
          <button
            className="button btn-trash btn-sm"
            onClick={this.props.onDlete}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
        <i className={styleStar}></i>
      </li>
    )
  }
}

export default EmplouersListItem
