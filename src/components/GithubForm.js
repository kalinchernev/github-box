import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { githubApiRoot } from "../constants";
import GithubReposList from "./GithubReposList";

class GithubForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "kalinchernev",
      repos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    fetch(`${githubApiRoot}/users/${username}/starred`)
      .then(res => res.json())
      .then(repos => this.setState({ repos }))
      .catch(ex => console.log("parsing failed", ex));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="container">
          <TextField
            hintText="octocat"
            floatingLabelText="Username:"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
          />
        </form>
        <GithubReposList repos={this.state.repos} />
      </div>
    );
  }
}

export default GithubForm;
