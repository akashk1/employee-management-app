import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import classes from "./User.module.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const columns = [
  { field: "name", headerName: "Name", width: 250 },
  { field: "mobile", headerName: "Mobile No.", width: 150 },
  { field: "age", headerName: "Age", width: 80 },
  {
    field: "team",
    headerName: "Team",

    width: 130,
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 160,
  },
];

export default function DataTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/users/getAll";
    axios.get(url).then((res) => {
      let copy = [];
      console.log(res.data);
      res.data.map((user) => {
        copy.push({ ...user, id: user["_id"] });
      });
      setUsers(copy);
    });
  }, []);
  return (
    <React.Fragment>
      <div className={classes.searchContainer}>
        <Autocomplete
          style={{ width: "500px", height: "20px" }}
          id="combo-box-demo"
          options={users}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              square
              style={{ width: "500px", height: "20px" }}
            />
          )}
        />
      </div>
      <div className={classes.container}>
        <div style={{ height: 765 }}>
          <DataGrid rows={users} columns={columns} pageSize={5} />
        </div>
      </div>
    </React.Fragment>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];
