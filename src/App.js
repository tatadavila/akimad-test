import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Loader, SearchBox, UserList } from "./components/index";

function App() {
  const [showLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  console.log({ searchValue });

  useEffect(() => {
    searchValue !== "" ? setShowList(true) : setShowList(false);
  }, [searchValue]);

  return (
    <div className="App">
      {showLoader ? <Loader /> : null}
      <Header />
      <SearchBox value={searchValue} setValue={setSearchValue} />
      <UserList query={searchValue} show={showList} />
    </div>
  );
}

export default App;
