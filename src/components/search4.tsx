import React, { useState } from "react"

import * as JsSearch from 'js-search';

function Search4() {

  var theGreatGatsby = {
    isbn: '9781597226769',
    title: 'The Great Gatsby',
    author: {
      name: 'F. Scott Fitzgerald'
    },
    tags: ['book', 'inspirational']
  };
  var theDaVinciCode = {
    isbn: '0307474275',
    title: 'The DaVinci Code',
    author: {
      name: 'Dan Brown'
    },
    tags: ['book', 'mystery']
  };
  var angelsAndDemons = {
    isbn: '074349346X',
    title: 'Angels & Demons',
    author: {
      name: 'Dan Brown',
    },
    tags: ['book', 'mystery']
  };

  var search = new JsSearch.Search('isbn');
  search.addIndex('title');
  search.addIndex(['author', 'name']);
  search.addIndex('tags')

  search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

  search.search('The');    // [theGreatGatsby, theDaVinciCode]
  search.search('scott');  // [theGreatGatsby]
  search.search('dan');    // [angelsAndDemons, theDaVinciCode]
  search.search('mystery') // [angelsAndDemons, theDaVinciCode]

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function SearchData(e) {
    setSearchQuery(e.target.value);
    console.log(search.search(searchQuery));
    setSearchResults(search.search(searchQuery));
    return null;
  }

  // TODO: this can also go to a search page
  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>

      <h1>Search</h1>
      <p>Search for books</p>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="Search" style={{ paddingRight: "10px" }}>
            Enter your search here
          </label>
          <input
            id="Search"
            value={searchQuery}
            onChange={SearchData}
            placeholder="Enter your search here"
            style={{ margin: "0 auto", width: "400px" }}
          />
        </div>
      </form>

      <div>
        <ul>
          {searchResults.map(result => (
            <li>{result.title}</li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  )

}
export default Search4