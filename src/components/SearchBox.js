import React from "react";
import IconButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";

import "./SearchBox.css";

const SearchBox = ({ value, setValue }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchContainer">
      <TextField
        id="userSearch"
        label="Search User"
        margin="normal"
        type="search"
        onChange={onChange}
        value={value}
      />
      {/* <IconButton color="secondary" id="searchButton" variant="contained" size="large" >
        <Search />
      </IconButton> */}
    </div>
  );
};

export default SearchBox;
