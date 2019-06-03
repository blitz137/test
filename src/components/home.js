import React from "react";
import { StaticQuery} from "gatsby";
import PropTypes from "prop-types";

const HomePage = ({idNumber}) => (
  <StaticQuery
    query={ 
      graphql`
      query {
        ones: allContentfulHomePage(
          filter: {
            contentful_id: {
              in: ["1dIA49AE5EQNGmSJrfRkpV", "3cByvheRf2sP4asouTddqS"]
            }
          }
        ) {
          edges {
            node {
              title
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
        }
      }
    `
  }
    render={data => (
      <>
        <div className="home">
          <img className="img" src={data.ones.edges[idNumber].node.image.file.url} alt={data.ones.edges[idNumber].node.image.file.url}/>
          <div>
            <h1 id="bigT">Current Focus Project</h1>
            <h2>{data.ones.edges[idNumber].node.title}</h2>

            <p>{data.ones.edges[idNumber].node.content.content}</p>
          

            <div className="but">
              <button>Donate</button>
              <button>Volunteer</button>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

HomePage.propTypes = {
  idNumber: PropTypes.number,
}
HomePage.defaultProps = {
  idNumber: ``,
}
export default HomePage;
