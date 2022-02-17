import React, { useState } from "react";
import "./App.css";
import { Header, Loader, SearchBox, UserList } from "./components/index";

function App() {
  const [showLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showUserList] = useState(false);
  return (
    <div className="App">
      {showLoader ? <Loader /> : null}
      <Header />
      <SearchBox value={searchValue} setValue={setSearchValue} />
      <UserList show={showUserList} />
    </div>
  );
}

export default App;
