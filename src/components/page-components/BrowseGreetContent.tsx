import React from 'react';

// -- Subcomponents --------------------------------------------------------------------------------

import SearchBar from '../SearchBar';
import { CategorySprite, StudyDesk } from '../Artworks';

// -- Stylesheet -----------------------------------------------------------------------------------

import './BrowseGreetContent.scss';

// -- Component ------------------------------------------------------------------------------------

export default function BrowseGreetContent(props: {
  categories: string[];
  setSearchQuery: Function;
}) {
  // -- Render -----------------------------------------------------------------

  return (
    <div id="browse-content" className="container">
      <div id="browse-greet-box">
        <div id="browse-banner-wrap">
          <StudyDesk />
        </div>
        <div id="browse-search-wrap">
          <h1>Hello and welcome!</h1>
          <h2>Discover new perspectives with our library</h2>
          <div id="browse-search-bar-wrap">
            <SearchBar
              searchHandler={(query: string) =>
                props.setSearchQuery({ query, category: 'Any Category', author: false })
              }
              initialValue=""
              activeSearch={false}
            />
          </div>
        </div>
      </div>
      <div id="browse-category">
        <h2>Or, Browse by category</h2>
        {props.categories.length === 0 && <div className="rolling"></div>}
        {props.categories.length !== 0 && (
          <div id="browse-category-blocks">
            {props.categories.map((category, index) => (
              <div
                className="browse-category-block"
                key={`category-block-${index}`}
                onClick={() => props.setSearchQuery({ query: '', category, author: false })}
              >
                <div>{<CategorySprite />}</div>
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
