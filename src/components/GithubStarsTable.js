import React, { Component } from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class GithubStarsTable extends Component {
  render() {
    const { repos } = this.props;

    return repos.length
      ? <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Stars</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {repos.map((repo, index) => (
              <TableRow key={index}>
                <TableRowColumn>{repo.name}</TableRowColumn>
                <TableRowColumn>{repo.stargazers_count}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      : <p className="container">
          Enter a username and check his starred repos.
        </p>;
  }
}

export default GithubStarsTable;
