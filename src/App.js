import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, SearchBox, UserList } from "./components/index";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    searchValue !== "" ? setShowList(true) : setShowList(false);
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      <SearchBox value={searchValue} setValue={setSearchValue} />
      <UserList query={searchValue} show={showList} />
    </div>
  );
}

export default App;
