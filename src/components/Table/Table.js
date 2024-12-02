// src/components/Table.js
import PropTypes from "prop-types";
import React from "react";
import "./Table.css";

/**
 * Reusable Table Component
 * @param {Array} columns - Array of column definitions with `header` and `accessor` keys.
 * @param {Array} data - Array of row data objects.
 * @param {function} onRowClick - Function to execute when a row is clicked (optional).
 */
const Table = ({ columns, data, onRowClick }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(row)}
              className={onRowClick ? "clickable-row" : ""}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
};

export default Table;
