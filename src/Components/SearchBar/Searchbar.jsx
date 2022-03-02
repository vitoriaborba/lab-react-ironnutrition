import React, {useState} from 'react'
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
const [search, setSearch] = useState('')
const handleChange = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value)
}
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
