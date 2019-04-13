import React from "react";
import Test from '../components/test'
import { Helmet } from "react-helmet"
import Home from '../components/home'
import Layout from "../components/layout"
import What from "../components/weDo"
import Facility from "../components/facilityImage"


export default () => (
    <Layout> 
  <div>
 <Facility/>
 <What/>

    <h1 id='ourP'>Our Programs</h1>
   <Home/>
  <Test/>

    
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