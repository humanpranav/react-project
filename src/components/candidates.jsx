//this is the implementation of the candidates table
import React, { Component } from "react";
import CandidatesTable from "./candidatesTable";
import Pagination from "../common/pagination";
import { getSpecialties } from "../resumes/fakeSpecialtyService";
import ListGroup from "../common/listGroup";
import { getCandidates } from "../resumes/fakeCandidateService";
import _ from "lodash";

import { paginate } from "../common/utils/paginate";
import "../candidates.css";

class Candidates extends Component {
  state = {
    candidates: [],
    pageSize: 4,
    currentPage: 1,
    specialties: [],
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const specialties = [
      { _id: "", name: "All Specialties" },
      ...getSpecialties(),
    ];

    this.setState({ candidates: getCandidates(), specialties });
  }

  handleDelete = (candidate) => {
    const candidates = this.state.candidates.filter(
      (m) => m._id !== candidate._id
    );
    this.setState({ candidates: candidates });
  };
  handleLike = (candidate) => {
    const candidates = [...this.state.candidates];
    const index = candidates.indexOf(candidate);
    candidates[index] = { ...candidates[index] };
    candidates[index].liked = !candidates[index].liked;
    this.setState({ candidates });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSpecialtySelect = (specialty) => {
    this.setState({ selectedSpecialty: specialty, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedSpecialty,
      sortColumn,
      candidates: allCandidates,
    } = this.state;

    const filtered =
      selectedSpecialty && selectedSpecialty._id
        ? allCandidates.filter((m) => m.specialty._id === selectedSpecialty._id)
        : allCandidates;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const candidates = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: candidates };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;

    const { totalCount, data: candidates } = this.getPageData();
    return (
      <div className="row">
        <div className="col-1"></div>

        <ListGroup
          items={this.state.specialties}
          onItemSelect={this.handleSpecialtySelect}
          selectedItem={this.state.selectedSpecialty}
        />
        <div className="col-8">
          <p>Showing {totalCount} candidates</p>

          <CandidatesTable
            candidates={candidates}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Candidates;
