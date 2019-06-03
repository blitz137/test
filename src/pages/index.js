import React from "react";
import { Helmet } from "react-helmet"
import Home from '../components/home'
import Layout from "../components/layout"
import What from "../components/weDo"
import Facility from "../components/facilityImage"
import Quotes from "../components/testimonies"
import Involved from "../components/involved"

export default () => (
  <Layout> 
    <div>
      
      <Facility/>
      <What/>
      <div>
      <Quotes/>
      <div>
      <Involved/>
      </div>
</div>


      <h1 id='ourP'>Our Programs</h1>

      <Home idNumber={0}/>
      <Home idNumber={1}/>

    </div>
  </Layout>
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