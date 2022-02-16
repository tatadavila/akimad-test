import React from "react";
import TextField from "@mui/material/TextField";

import "./SearchBox.css";

// const {Search} = Input

const SearchBox = () => {

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <div>
      <TextField
        id="userSearch"
        label="Search User"
        margin="normal"
        onSearch={onSearch}
        type="search"
      />
    </div>
  );
};

export default SearchBox;
