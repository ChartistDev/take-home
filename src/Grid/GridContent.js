import capitalize from "../utils/capitalize";
const GridContent = ({ contentData }) => {
  const dataRows = contentData.map((value) => {
    const string = capitalize(value.string.split(" = ").join(" is "), " is ");
    return (
      <div className="content-row" key={string}>
        <div className="content-row-header">
          <span>{string}</span>
        </div>
        <div className="cell-header">
          {Object.keys(value)
            .filter((val) => val !== "string")
            .map((cell) => {
              return (
                <div className="grid-cell" key={cell}>
                  <span className={`cell-span${posnegClass(value, cell)}`}>
                    {value[cell]}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
  return <div className="content-container">{dataRows}</div>;
};

function posnegClass(value, cell) {
  if (cell === "avg_duration_impact") {
    if (value[cell] < 0) {
      return "Negative";
    } else {
      return "Positive";
    }
  }
  return "";
}
export default GridContent;
