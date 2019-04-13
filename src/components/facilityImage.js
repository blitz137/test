import React from "react"
import { StaticQuery, graphql } from "gatsby";


const FacilityImage = () => (


 <StaticQuery
    query={graphql`
      query facility {
        contentfulHomePage(contentful_id:{eq:"1utulHC3bMPjBMEjfRIgcw"}){
      
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
      
         image: {
          file: { url }
        }
      }
        }
        
  
  
   ) => (
      <>
         <div class= "facilityImage">
     
       <div>
      
        <img class='facImg'src={url} />

       

        </div>
        </div>       
      </>
    )}
  />

);

export default FacilityImage;
