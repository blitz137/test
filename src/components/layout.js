import React from "react"
import Logo from "../components/logo"



export default ({ children }) => (
  <div class="layout">
  	<nav>
	<div class='logo'>
	<Logo />
	</div>
	<div class='nav'>
		<a href="">Home</a>
		<a href="">About</a>
		<a href="">Support</a>
		<a href="">Contact US</a>
		<a href="">Client Application</a>
		<a id='donate' href="">Donate!</a>
			
	</div>

</nav>
<div class='redBanner'></div>

    {children}
    <footer>
    <div>
	<div>
		<img src=""/>
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
<a href="">Donate</a>	
<a href="">Fundraise</a>		
<a href="">Volunteer</a>	
<a href="">Client Application</a>	
</div>

<div>
	<h3>INFO</h3>
<a href="">Our Story</a>	
<a href="">Programs</a>		
<a href="">Testimonials & Updates</a>	
<a href="">Event Calendar</a>

</div>

<div>
	<h3>Newsletter</h3>
</div>
</div>
</footer>
  </div>
)
