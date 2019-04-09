import React from "react"

import { StaticQuery, graphql } from "gatsby"



export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulHomePage {
    edges {
      node {
        title
        date
        content {
          content
        }
        image {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
      }
    `
}
    render={data => (
      <div
       
      >
      <h3> {data.site.siteMetadata.title}</h3>
        
        {children}
      </div>
    )}
  />
)