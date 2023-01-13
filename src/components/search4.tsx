import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby";

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

  console.log(theGreatGatsby);

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


  search.addIndex('node.id');
  search.addIndex('node.name');

  function Objectives(props) {

    // console.log('🍔');
    console.log(props.areas); // doesnt get down far enough the node might be the problem
    console.log(props.areas.node); // 

    search.addDocuments(props.areas);

    return null;
  }

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

      <StaticQuery
        query={query}
        render={data => (
          <>
            <Objectives areas={data.allStrapiArea.edges} />
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
export default Search4

const query = graphql`
query SearchQuery {
  allStrapiArea {
    edges {
      node {
        id
        name
      }
    }
  }
}`