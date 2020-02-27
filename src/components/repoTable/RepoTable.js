import React, { useState, useEffect } from "react";
import { DataTableSkeleton, Pagination } from "carbon-components-react";
import RepoTable from "./table";

const fetch = require("node-fetch");

const headers = [
  {
    key: "QRYID",
    header: "QRYID"
  },
  {
    key: "INVNO",
    header: "INVNO"
  },
  {
    key: "INVDATE",
    header: "INVDATE"
  },
  {
    key: "INVAGE",
    header: "INVAGE"
  }
];

const RepoPage = () => {
  const [rows, setRows] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  useEffect(() => {
    fetch(`${process.env.API_URL}/database/getInfoFromDatabase`, {
      method: "post",
      body: JSON.stringify({
        numberOfRows: 1000
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        setRows(json);
        setTotalItems(json.length);
        console.log("dot env", rows);
      });
  }, [rows]);

  return (
    <div>
      <>
        <RepoTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={totalItems}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </>
    </div>
  );
};

export default RepoPage;
