const GridContent = ({ contentData }) => {
  const dataRows = contentData.map((value) => {
    return (
      <div className="content-row" key={value.string}>
        <div className="content-row-header">
          <span>{value.string}</span>
        </div>
        <div className="cell-header">
          {Object.keys(value)
            .filter((val) => val !== "string")
            .map((cell) => {
              return (
                <div className="grid-cell" key={cell}>
                  <span>{value[cell]}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
  return <div className="content-container">{dataRows}</div>;
};
export default GridContent;
