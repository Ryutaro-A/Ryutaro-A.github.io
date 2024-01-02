import { graphql } from "gatsby";
import React from "react"
// import 'github-markdown-css'
// import '../../static/blog.css'
import '../styles/blog.css'
import Container from 'react-bootstrap/Container';
import Header from "./header"
import { Link } from "gatsby";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const BlogListPage = ({ data }) => {
    const list = [];
    for (let i = 0; i < data.allMarkdownRemark.nodes.length; i++) {
        list.push(<div><ListItem>
            <Link to={data.allMarkdownRemark.nodes[i].id}>
            <ListItemText
            primary={data.allMarkdownRemark.nodes[i].frontmatter.title}
            secondary={data.allMarkdownRemark.nodes[i].frontmatter.date}
            />
            </Link>
            </ListItem>
            <Divider /></div>);
    }

    return (
        <div>
            <Header />
        <Container>
        <h2>Articles</h2>
            <ul>
                <List>
                    { list }
                </List>
            </ul>
        </Container>
        </div>
    );
};

// export const query = graphql`
//     query IndexPageQuery {
//         allMarkdownRemark {
//         nodes {
//         html
//         }
//         }
//     }
// `;

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
    nodes {
        id
        frontmatter {
            title
            date
        }
        headings {
            id
        }
    }
    }
  }
`

export default BlogListPage;