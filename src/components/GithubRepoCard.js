import React from "react";

import { Card, CardActions, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const GithubRepoCard = ({ repoData }) => (
  <Card>
    <CardHeader title={repoData.name} subtitle={repoData.description} />
    <CardActions>
      <FlatButton label="View" href={repoData.html_url} />
    </CardActions>
  </Card>
);

export default GithubRepoCard;
