import React, {useState} from 'react'
import {Input} from 'antd'

import "./SearchBox.css"

const {Search} = Input


const SearchBox = () => {

  const [onLoading, setOnLoading] = useState(false)

  const onSearch = value => {
    setOnLoading(true)
    console.log(value)
  };

  return (
    <div className='headerContainer'>
      <Search
        enterButton="Search"
        loading={onLoading}
        placeholder='Enter the user name'
        onSearch={onSearch}
        type={"search"}
      />
    </div>
  )
}

export default SearchBox