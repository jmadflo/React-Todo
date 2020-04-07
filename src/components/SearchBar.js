import React from 'react'

const SearchBar = props => {
    return (
        <form>
            <input type="text" name="SearchBar" placeholder="Search" onChange={props.updateSearch}/>
        </form>
    )
}

export default SearchBar