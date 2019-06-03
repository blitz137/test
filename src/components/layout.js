import React from "react";
import Logo from "../components/logo";
import { Link } from "gatsby"
import Header from "../components/header";
export default ({ children }) => (
  <div className="layout">
   <Header/>

    {children}
    <footer>
      <div>
        <div>
          <img src="" alt=""/>
          <div>
            <p>3890FM3514</p>
            <p>Beaumont, TX 77705</p>
            <p>info@dreamcentersetx.org</p>
            <p>(409) 234-5255</p>
          </div>
          <div>
            <h3>STAY CONNECTED</h3>
            <div>
              <p>social media icons</p>
            </div>
          </div>
        </div>

        <div>
          <h3>ACTION</h3>
          <Link id='link'to="/">Donate</Link>
          <Link id='link'to="/">Fundraise</Link>
          <Link id='link'to="/">Volunteer</Link>
          <Link id='link'to="/">Client Application</Link> 
        </div>

        <div>
          <h3>INFO</h3>
          <Link id='link'to="/">Our Story</Link>
          <Link id='link'to="/">Programs</Link>
          <Link id='link'to="/">Testimonials & Updates</Link>
          <Link id='link'to="/">Event Calendar</Link>
        </div>

        <div>
          <h3>Newsletter</h3>
        </div>
      </div>
    </footer>
  </div>
);
