import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby";

import * as JsSearch from 'js-search';
// ? why is this having a problem its as documented
// https://github.com/bvaughn/js-search
// import { JsSearch } from "js-search"; // this doesnt work

function ResultList(props) {
  // this is nested and named in a confusing way
  if (props.props.length) {
    return (
      <ul>
        {props.props.map(result => (
          <li key={result.id}>
            {result.name}
          </li>
        ))}
      </ul>
    )
  } else {
    return (
      <>Nothing found in the search</>
    )
  }
}

function Search7() {
  var search = new JsSearch.Search('id'); // why does this always cause a problem
  search.addIndex('name');

  function Documents(props) {
    search.addDocuments(props.areas); // this is the problem
    return null;
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function SearchData(e) {
    setSearchQuery(e.target.value);
    setSearchResults(search.search(searchQuery));
    return null;
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <>
      <StaticQuery
        query={query}
        render={data => (
          <Documents areas={data.allStrapiArea.nodes} />
        )}
      />
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="Search">
            Enter your search here
          </label>
          <input
            id="Search"
            value={searchQuery}
            onChange={SearchData}
            placeholder="Enter your search here"
          />
        </div>
      </form>
      <ResultList props={searchResults} />
    </>
  )

}
export default Search7

const query = graphql`
query SearchQuery {
  allStrapiArea {
    nodes {
      id
      name
    }
  }
}`