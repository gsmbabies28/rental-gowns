import React from "react";

const ProducDetailsTable = ({ details }) => {
  let detailsTable=[];
  for (let item in details) {
    detailsTable.push(
        <tr key={item}>
            <td className="tracking-widest text-left">{item.toLowerCase()}</td>
            <td className="tracking-widest text-right">{details[item]}</td>
        </tr>
    )
  }
  console.log(detailsTable);
  return (
    <table className="table-auto">
      <thead className="p-2">
        <tr>
          <th></th>
          <th>inches</th>
        </tr>
      </thead>
      <tbody>
        {detailsTable}
      </tbody>
    </table>
  );
};

export default ProducDetailsTable;
