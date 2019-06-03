import React from "react"
import "./testimonies.scss"
import { Link } from "gatsby"

const quotes = () => (
	<>
	<div className='homeQuotes'>
		<div>
			<div className='quoteBox'>
				<div>
					<p>Lorem ipsum dolor sit amet, consectefuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
					<p>- Sarah Hunt</p>
				</div>
			</div>
			
			<div className='quoteBox'>
				<div>
					<p>Lorem ipsum dolor sit amet, consectefuer adipiscing elit, sed diLorem ipsum dolor sit amet, consectefuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
					<p>- Jeremy Voss</p>
				</div>
			</div>
		</div>
		<div className='myLink'>
		<Link id='link'to="/">See More Testimonies</Link>
		</div>
	</div>
	</>
)

export default quotes;
