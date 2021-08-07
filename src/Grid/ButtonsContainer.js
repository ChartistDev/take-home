import CreatePagination from "../utils/PageCount";
const ButtonsContainer = ({
  contentData,
  displayRows,
  handleBtnClick,
  currentPage,
}) => {
  const pageCount = CreatePagination(contentData, displayRows);
  let buttons = [];
  for (let i = 1; i < pageCount + 1; i++) {
    buttons.push(
      <button className="page-btn" onClick={handleBtnClick} key={i}>
        {i}
      </button>
    );
  }
  return <div className="buttons-container">{buttons}</div>;
};

export default ButtonsContainer;
