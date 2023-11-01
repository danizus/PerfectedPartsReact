import React from "react";
import data from"./categories.json"



const generateRow = (rowData, open, setOpen) => {
  const handleExpand = () => {
    let set = new Set(open);
    set.add(rowData.label);
    setOpen(set);
  };

  const handleCollapse = () => {
    let set = new Set(open);
    set.delete(rowData.label);
    setOpen(set);
  };

  return (
    <div>
      <p style={{backgroundColor:"red"}}>
        {rowData.label}
        {console.log(rowData)}
        &nbsp;
        {rowData.subs.length > 0 && !open.has(rowData.label) && (
          <button onClick={handleExpand}>&#x2193;</button>
        )}
        {rowData.subs.length > 0 && open.has(rowData.label) && (
          <button onClick={handleCollapse}>&#x2191;</button>
        )}
      </p>
      {rowData.subs.length > 0 && open.has(rowData.label) && (
        <ul>
          {rowData.subs.map((child) => {
            return (
              <li style={{marginLeft:"20px"}} key={child.label}>{generateRow(child, open, setOpen)}</li>
            );
          })}
        </ul>
      )}
      <ol></ol>
    </div>
  );
};

const App = () => {
  // open state to keep trach of which labels are selected to be open or not
  // use recursion to generate list on demand
  const [open, setOpen] = React.useState(new Set());
  const jsonData = [
    ...data]
return(
<div>
  {jsonData.map((item) =>  generateRow(item, open, setOpen))}
  </div>




)



};

export default App;
