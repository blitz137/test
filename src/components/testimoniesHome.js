/*import React from "react"
import { StaticQuery, graphql } from "gatsby";


const TestHome = () => (


 <StaticQuery
    query={graphql`
      query testimonials {
       allContentfulHomePage {
      edges {
        node {
          title
        
 content{
        content
      }
        }
      }
     
    }
        
  }
  
      
    
    `}
    render={({
        
       allContentfulHomePage:{
      
       edges: {
        node: {
          title,
          content: { content }
        }
      }

       
      }
        }
        
  
  
   ) => (
      <>
         <div class= "whatWeDo">
     
       <div>
      
        <h2>{title}</h2>
              
       
        <p>{content}</p>

       

        </div>
        </div>       
      </>
    )}
  />

);

export default TestHome;


*/