import React, { Component } from "react";
import GridContent from "./GridContent";
import DisplayList from "../utils/paginationDisplay";
import ButtonsContainer from "./ButtonsContainer";
import capitalize from "../utils/capitalize";
class TakeHomeGrid extends Component {
  state = {
    currentPage: 1,
    displayRows: 6,
    currentData: this.props.data,
  };

  handleBtnClick = (e) => {
    this.setState({ currentPage: e.target.innerHTML });
  };
  render() {
    const displayData = DisplayList(
      this.state.currentData,
      this.state.displayRows,
      this.state.currentPage
    );
    const contentColumnHeaders = Object.keys(displayData[0]).filter((key) => {
      return key !== "string";
    });
    const headerCells = contentColumnHeaders.map((header) => {
      let headerStr = header.split("_");
      headerStr = capitalize(
        `${headerStr[headerStr.length - 2]} ${headerStr[headerStr.length - 1]}`,
        " "
      );

      return (
        <div className="column-header-content" key={header}>
          <span>{headerStr}</span>
        </div>
      );
    });

    return (
      <div className="grid-container">
        <div className="column-header-container">
          <div className="subgroup-header">
            <span>Sub Group Name</span>
          </div>
          <div className="column-header">{headerCells}</div>
        </div>
        <GridContent contentData={displayData} />
        <ButtonsContainer
          contentData={this.state.currentData}
          displayRows={this.state.displayRows}
          currentPage={this.state.currentPage}
          handleBtnClick={this.handleBtnClick}
        />
      </div>
    );
  }
}

export default TakeHomeGrid;
