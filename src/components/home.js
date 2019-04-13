import React from "react"
import { StaticQuery, graphql } from "gatsby";


const HomePage = () => (

 <StaticQuery
    query={graphql`
      query HomePage {
     
         contentfulHomePage(contentful_id:{eq:"1dIA49AE5EQNGmSJrfRkpV"}){
          title
          date
          content {
            content
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
        
      contentfulHomePage: {
        title,
        date,
        content: { content },
        image: {
          file: { url }
        }
      }
    }) => (
      <>
      <div class= "home">
       <img class='img'src={url} />
       <div>
      <h1 id="bigT">Current Focus Project</h1>
        <h2>{title}</h2>
              
       
        <p>{content}</p>

        <div class="but">
        <button>Donate</button><button>Volunteer</button>
        </div>

        </div>
        </div>
      </>
    )}
  />

);

export default HomePage;
