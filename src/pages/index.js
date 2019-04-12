import React from "react";
import Test from '../components/test'
import { Helmet } from "react-helmet"
import Home from '../components/home'

export default () => (
  <div>

    <h1 id='ourP'>Our Programs</h1>
   <Home/>
  <Test/>

    <h1>Test for Dream Center</h1>
    <p>
     The purple border indicates a component with content pulled from contentful.
    </p>
  </div>
)

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
      </div>
    )
  }
}