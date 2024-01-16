import React from "react"
import "./emplouers-add-form.css"
import styled from "styled-components"
//
export const Wrapper = styled.div`
  margin-top: 30px;
  background: #3d5a80;
  color: white;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  padding: 25px;
`
class EmplouersAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      maney: "",
    }
  }
  onAddValue = (e) => {
    this.setState({
      // В даннам случае name это ссылка на атрибут name у input на который кликнули.
      [e.target.name]: e.target.value,
    })
  }
  addEmplouers = (e) => {
    e.preventDefault()
    if (this.state.name === "") {
      alert("Впишите имя")
    } else if (this.state.maney === "") {
      alert("Впишите зарплату")
    } else {
      // Принимает в аргумент name, maney. Тело в App
      this.props.setEmplouers(this.state)
      this.setState({
        name: "",
        maney: "",
      })
    }
  }
  render() {
    return (
      <Wrapper className="app-add-form">
        <h3>Добвьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            type="text"
            onChange={this.onAddValue}
            // атрибут для оптимизации
            name="name"
            // управляемый компонент
            value={this.state.name}
          />
          <input
            className="form-control new-post-label"
            placeholder="З/П в $ ?"
            type="number"
            onChange={this.onAddValue}
            // атрибут для оптимизации
            name="maney"
            // управляемый компонент
            value={this.state.maney}
          />
          <button
            className="btn btn-outline-light"
            type="submit"
            onClick={this.addEmplouers}
          >
            Добавить
          </button>
        </form>
      </Wrapper>
    )
  }
}

export default EmplouersAddForm
