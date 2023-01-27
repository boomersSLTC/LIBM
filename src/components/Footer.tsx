import React from 'react';

// -- Stylesheet -----------------------------------------------------------------------------------

import './Footer.scss';

// -- Component ------------------------------------------------------------------------------------

export default function Footer() {
  // -- Render -----------------------------------------------------------------

  return (
    <footer id="template-footer" className="container-fluid">
      <div className="container">
        <h1>LIBM</h1>
        <h2>
          Creating opportunities, connecting people to people, people to place, and people to learning.
          <br />
          Expanding horizons and fostering growth, one book at a time.
        </h2>
        <h3>Copyright &copy;2022 Boomers. All rights reserved.</h3>
      </div>
    </footer>
  );
}
