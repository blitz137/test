import React from "react"
import { StaticQuery, graphql } from "gatsby";

const Test = () => (

 <StaticQuery
    query={graphql`
         query Test {
        
         contentfulHomePage(contentful_id:{eq:"3cByvheRf2sP4asouTddqS"}){
      
        title,
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
        
       contentfulHomePage:{
      
        title,
         content: { content },
        image: {
          file: { url }
        }
      }
        }
        
  
  
   ) => (
      <>
         <div class= "home">
       <img src={url} />
       <div>
      <h1 id="bigT">Second Focus Project</h1>
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

export default Test;