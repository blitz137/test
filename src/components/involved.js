
import React from "react"
import "./involved.scss"
import donate from "../images/homeDonate.jpg"
import fundraise from "../images/homeFundraise.jpg"
import volunteer from "../images/homeVolunteer.jpg"
import waterBottom from "../images/watercolorTop.png"
import waterTop from "../images/watercolorBottom.png"
import { Link } from "gatsby"

const involved = () => (
  <>

  <div className='getInvolved'>
    <div>
    <h1 id='involveTitle' >Get Involved</h1>
    <img className='watercolor' src={waterTop} alt="#"/>
    
    <div className='rowContainer'>
      <div>
        <Link to="/"><h1>Donate</h1></Link>
        <Link id='pic' to="/"><img src={donate} alt="#"/></Link>
      </div>

      <div>
        <Link to="/"><h1>Volunteer</h1></Link>
        <Link id='pic' to="/"><img src={volunteer} alt="#"/></Link>
      </div>

      <div>
        <Link to="/"><h1>Fundraise</h1></Link>
        <Link id='pic' to="/"><img src={fundraise} alt="#"/></Link>
      </div>
    </div>
    <div className='myLink'>
      <Link id='link'to="/">See Our Event Calendar</Link>
    </div>
    <img className='watercolor' src={waterBottom} alt="#"/>
  </div>
  </div>
  </>
)




export default involved;