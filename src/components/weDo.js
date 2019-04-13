import React from "react"
import { StaticQuery, graphql } from "gatsby";


const WhatWeDo = () => (


 <StaticQuery
    query={graphql`
      query What {
        contentfulHomePage(contentful_id:{eq:"3uJHiIA5LutoxzeTT3dsJm"}){
      
        title,
         content {
            content
          }
         
          
        }
        
  }
  
      
    
    `}
    render={({
        
       contentfulHomePage:{
      
        title,
         content: { content }
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

export default WhatWeDo;
