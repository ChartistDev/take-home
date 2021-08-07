import React, { Component } from "react";
class DataSet extends Component {
  state = {
    dataset: this.props.dataset,
    value: "Bank",
  };
  handleSelect = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.props.handleSelect(e.target.value);
  };
  render() {
    return (
      <div className="dataset-container">
        <select value={this.state.value} onChange={this.handleSelect}>
          <option value="Bank">Bank</option>
          {/* <option value="Ecommerce">Ecommerce</option> */}
        </select>
      </div>
    );
  }
}

export default DataSet;
