import React from "react";

import { Card, CardActions, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const GithubRepoCard = ({ repoData }) => (
  <Card>
    <CardHeader title={repoData.name} subtitle={repoData.description} />
    <CardActions>
      <FlatButton label="View" />
      <FlatButton label="Star" />
    </CardActions>
  </Card>
);

export default GithubRepoCard;
