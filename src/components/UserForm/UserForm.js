import React from "react";
import classes from "./UserForm.module.css";
function UserForm() {
  return (
    <form className={classes.form}>
      <label>Name</label>
      <input type="text" name="name" style={{ width: "200px" }} />
    </form>
  );
}

export default UserForm;
