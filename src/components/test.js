import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Test = () => (
  <StaticQuery
    query={graphql`
      query Test {
        contentfulHomePage(contentful_id: { eq: "3cByvheRf2sP4asouTddqS" }) {
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
    `}
    render={data => (
      <>
        <div className="home">
          <img className="img" src={data.contentfulHomePage.image.file.url} alt="#" />
          <div>
            <h1 id="bigT">Second Focus Project</h1>
            <h2>{data.contentfulHomePage.title}</h2>

            <p>{data.contentfulHomePage.content.content}</p>

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



export default Test;
