import { graphql } from "gatsby";
import React from "react"
// import 'github-markdown-css'
// import '../../static/blog.css'
import '../styles/blog.css'
import Container from 'react-bootstrap/Container';
import Header from "./header"

const BlogPage = ({ data }) => {
    return (
        <div>
            <Header />
        <Container>
            <article className="markdown-body">
                <div
                    dangerouslySetInnerHTML={{
                    __html: data.allMarkdownRemark.nodes[0].html,
                    }}
                ></div>
            </article>
        </Container>
        </div>
    );
};

export const query = graphql`
    query IndexPageQuery {
        allMarkdownRemark {
        nodes {
        html
        }
        }
    }
`;

export default BlogPage;