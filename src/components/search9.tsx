// TODO: IO dont use this maybe one day Ill fix it
// but for now its a mess
// trying with ... spread or rest Im not 100% sure on this

import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby";

import * as JsSearch from 'js-search';
// ? why is this having a problem its as documented
// https://github.com/bvaughn/js-search
// import { JsSearch } from "js-search"; // this doesnt work


function Type(props) {
  console.log(props);

  return null;
}

function ResultList(props) {
  // this is nested and named in a confusing way
  if (props.props.length) {

    // console.log(props.props);

    return (
      <ul className="deck">
        {props.props.map(result => (
          <li key={result.id}>
            // * specifically doent have a prop has a spread instead
            <Type {...result} />
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

function Search8() {
  var search = new JsSearch.Search('id');
  search.addIndex('name');
  search.addIndex('jobber');

  function Documents(props) {
    search.addDocuments(props.areas);
    search.addDocuments(props.plans);
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
          <Documents
            areas={data.allStrapiArea.nodes}
            plans={data.allStrapiPlan.nodes}
          />
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
      <ResultList
        props={searchResults}
      // which={data}
      />
    </>
  )

}
export default Search8

const query = graphql`
query SearchQuery {
  allStrapiArea {
    nodes {
      id
      name
    }
  }

  allStrapiPlan {
    nodes {
      name
      jobber
      address
    }
  }
}`