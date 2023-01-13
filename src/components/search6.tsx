// I think Im one letter behind on the search which is maybe ok?
// TODO go to a search page with answers but thats more than  I know how to do

import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby";

import * as JsSearch from 'js-search';
// ? why is this having a problem its as documented
// https://github.com/bvaughn/js-search
// import { JsSearch } from "js-search"; // this doesnt work


function Burger(props) {
  console.log("🍔");
  console.log(props);
  console.log(props.props.length);

  if (props.props.length > 0) {
    console.log('things');

    // TODO: I need a map here
    return (
      <ul>
        {props.props.map(result => (
          <li>
            {result?.title}{result?.name}
          </li>
        ))}
      </ul>
    )
  } else {
    console.log('no things');
    return (
      <>Nothing found in the search</>
    )
  }
}

function Search5() {

  var theGreatGatsby = {
    isbn: '9781597226769',
    title: 'The Great Gatsby',
    author: {
      name: 'F. Scott Fitzgerald'
    },
    tags: ['book', 'inspirational']
  };

  // console.log(theGreatGatsby);

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

  var placetest = {
    id: '1',
    name: 'Placetest',
  };

  var lace2 = {
    id: '2',
    name: 'lace2',
  };

  var search = new JsSearch.Search('isbn');
  search.addIndex('title');
  search.addIndex(['author', 'name']);
  search.addIndex('tags')

  search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

  search.addDocuments([placetest, lace2]);
  // console.log([placetest, lace2]);


  search.addIndex('id');
  search.addIndex('name');

  function Objectives(props) {

    // console.log(props.areas);
    search.addDocuments(props.areas); // this is the problem

    return null;
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function SearchData(e) {
    setSearchQuery(e.target.value);
    // console.log('next is results');
    // console.log(search.search(searchQuery));
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

      {/* // TODO a better if there is nothing to show */}
      <div>
        <ul>
          {searchResults.map(result => (
            <>
              {/* <li>{result.title}{result.name}</li> */}
              {/* <IfNull props={result} /> */}
            </>
          ))}
        </ul>

        <Burger props={searchResults} />
        <hr />
      </div>

      <StaticQuery
        query={query}
        render={data => (
          <>
            <Objectives areas={data.allStrapiArea.nodes} />
            {/* <Objectives areas={data.allStrapiArea.edges?.node} /> nope */}

            {/* {data.allStrapiArea.edges.map(document => (
              <div key={document.node.id}>
                <h2>{document.node.name}</h2>
                <Up areas={document.node.name} />
              </div>
            ))} */}
          </>
        )}
      />
    </div>
  )

}
export default Search5

const query = graphql`
query SearchQuery {
  allStrapiArea {
    nodes {
      id
      name
    }
  }
}`