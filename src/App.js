import React, {useState} from 'react';
import './App.css';
import {Header, Loader, SearchBox, UserList} from './components/index'

function App() {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <div className="App">
      {showLoader ? <Loader /> : null}
      
      <Header />
      <SearchBox />
      <UserList />
    </div>
  );
}

export default App
