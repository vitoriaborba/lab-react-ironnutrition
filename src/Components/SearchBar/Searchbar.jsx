import React, {useState} from 'react'

function Searchbar(props) {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
        props.search(e.target.value)
    }

  return (
    <div>
        <h2>Search for Food:</h2>
        <input type="text" value={search} onChange={handleChange}/>
        <button type="submit">Search</button>
    </div>
  )
}

export default Searchbar