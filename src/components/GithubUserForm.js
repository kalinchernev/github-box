import React, { Component } from "react";
import { githubApiRoot } from "../constants";

class GithubUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "kalinchernev",
      orgs: []
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
    fetch(`${githubApiRoot}/users/${username}/orgs`)
      .then(res => res.json())
      .then(orgs => this.setState({ orgs }))
      .catch(ex => console.log("parsing failed", ex));
    this.setState({ username: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="username"
            placeholder="kalinchernev"
            value={this.state.username}
          />
          <button type="submit">Check</button>
        </form>
        <div className="results">
          {this.state.orgs.length
            ? <ul>
                {this.state.orgs.map((org, key) => (
                  <li key={key}>{org.login}</li>
                ))}
              </ul>
            : <p>Either there's nothing, or you haven't entered anything</p>}
        </div>
      </div>
    );
  }
}

export default GithubUserForm;
