import React from "react";
import "../style.css";
import { FaTrash } from "react-icons/fa";
const TableForm = ({table}) => {
  
  return (
    <table className="table-content">
      <thead>
        <tr className="table-head">
          <th>Keywords</th>
          <th>Goals</th>
          <th>Matches</th>
          <th>Search Status</th>
          <th>Delete Keyword</th>
        </tr>
      </thead>
      <tbody>
        {
          table.length && table.map( item => {
            return (
             <React.Fragment>
                <tr>
                <td>
                  {item.keyword}
                </td>
                <td>
                  {item.goal}
                </td>
                <td>
                  {item.matches}
                </td>
                <td>
                  {item.search_status}
                </td>
                <td>
                  <FaTrash/>
                </td>
              </tr>
             </React.Fragment>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default TableForm;
