import React, { Component } from "react";
import GithubRepoCard from "./GithubRepoCard";

class GithubReposList extends Component {
  render() {
    const { repos } = this.props;
    return repos.length
      ? <div>
          {repos.map(repo => <GithubRepoCard key={repo.id} repoData={repo} />)}
        </div>
      : <div />;
  }
}

export default GithubReposList;
