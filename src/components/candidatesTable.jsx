import React, { Component } from "react";

import Table from "../common/table.jsx";

class CandidatesTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "specialty.name", label: "Specialty" },

    { path: "yearsExperience", label: "Experience" },

    { path: "expertiseRating", label: "Expertise Rating" },

    {
      key: "delete",
      content: (candidate) => (
        <button
          onClick={() => this.props.onDelete(candidate)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { candidates, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={candidates}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CandidatesTable;
