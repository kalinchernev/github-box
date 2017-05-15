import React, { Component } from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class ProgrammingLanguages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: []
    };
  }

  componentDidMount() {
    const { endpoint } = this.props;

    fetch(endpoint)
      .then(res => res.json())
      .then(languages => this.setState({ languages: Object.keys(languages) }))
      .catch(ex => console.log("parsing failed", ex));
  }

  render() {
    return this.state.languages.length
      ? <div>
          {this.state.languages.join(", ")}
        </div>
      : <span>-</span>;
  }
}

class GithubStarsTable extends Component {
  render() {
    const { repos } = this.props;

    return repos.length
      ? <Table selectable={false}>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Stars</TableHeaderColumn>
              <TableHeaderColumn>Languages</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {repos.map((repo, index) => (
              <TableRow key={index} selectable={false}>
                <TableRowColumn>{repo.name}</TableRowColumn>
                <TableRowColumn>{repo.description}</TableRowColumn>
                <TableRowColumn>{repo.stargazers_count}</TableRowColumn>
                <TableRowColumn>
                  <ProgrammingLanguages endpoint={repo.languages_url} />
                </TableRowColumn>
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
