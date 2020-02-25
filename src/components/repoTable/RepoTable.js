import React from "react";
import RepoTable from "./table";

const headers = [
  {
    key: "name",
    header: "Name"
  },
  {
    key: "createdAt",
    header: "Created"
  },
  {
    key: "updatedAt",
    header: "Updated"
  },
  {
    key: "issueCount",
    header: "Open Issues"
  },
  {
    key: "stars",
    header: "Stars"
  },
  {
    key: "links",
    header: "Links"
  }
];

const rows = [
  {
    id: "1",
    name: "Repo 1",
    createdAt: "Date",
    updatedAt: "Date",
    issueCount: "123",
    stars: "456",
    links: "Links"
  },
  {
    id: "2",
    name: "Repo 2",
    createdAt: "Date",
    updatedAt: "Date",
    issueCount: "123",
    stars: "456",
    links: "Links"
  },
  {
    id: "3",
    name: "Repo 3",
    createdAt: "Date",
    updatedAt: "Date",
    issueCount: "123",
    stars: "456",
    links: "Links"
  }
];

const RepoPage = () => {
  return (
    <div>
      <RepoTable headers={headers} rows={rows} />
    </div>
  );
};

export default RepoPage;