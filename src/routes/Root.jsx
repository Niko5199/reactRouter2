import React from 'react';

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              type="search"
              aria-label="Search contacts"
              placeholder="Search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="contacts/1">Your Name</a>
            </li>
            <li>
              <a href="contacts/2">Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" />
    </>
  );
};
