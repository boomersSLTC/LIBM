import React from 'react';

// -- Subcomponents --------------------------------------------------------------------------------

import AuthModal from '../components/AuthModal';

// -- Stylesheet -----------------------------------------------------------------------------------

import './Auth.scss';

// -- Component ------------------------------------------------------------------------------------

export default function AuthPage() {
  // -- Render -----------------------------------------------------------------

  return (
    <div id="auth-back">
      <div id="auth-back-shape">
        <div id="auth-back-overlay"></div>
      </div>
      <div id="auth-banner" className="container">
        <div id="auth-main" className="container">
          <div id="auth-heading">
            <h1>LIBM</h1>
            <h2>
              Connects – people to people, people to place, people to learning.
              <br />
              <br />
              Expanding horizons and fostering growth, one book at a time.
            </h2>
          </div>
          <div id="auth-modal-wrap">
            <AuthModal />
          </div>
        </div>
      </div>
      <footer id="auth-footer" className="container">
        <span>Copyright &copy;2022 Boomers</span>
      </footer>
    </div>
  );
}
