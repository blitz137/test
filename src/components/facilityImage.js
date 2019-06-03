import React from "react";
import { StaticQuery, graphql } from "gatsby";

const FacilityImage = () => (
  <StaticQuery
    query={graphql`
      query facility {
        contentfulHomePage(contentful_id: { eq: "1utulHC3bMPjBMEjfRIgcw" }) {
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
        image: {
          file: { url }
        }
      }
    }) => (
      <>
        <div className="facilityImage">
          <div>
            <img className="facImg" src={url} alt={url} />
          </div>
        </div>
      </>
    )}
  />
);

export default FacilityImage;
 