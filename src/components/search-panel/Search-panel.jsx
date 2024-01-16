import React from "react"
import "./search-panel.css"

class SearchPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      termInner: "",
    }
  }
  onChange = (e) => {
    let target = e.target.value
    this.setState({ termInner: target })
    this.props.onUpdate(target)
  }
  render() {
    return (
      <input
        type="text"
        placeholder="Найти сотрудника"
        className="form-control search-input"
        value={this.state.termInner}
        onChange={this.onChange}
      />
    )
  }
}

export default SearchPanel


