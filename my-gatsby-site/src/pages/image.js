//components/image.js

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => (
    <StaticQuery
        query={graphql`
        query {
            images: allFile {
            edges {
                node {
                relativePath
                name
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
        `}

    /*
    サイズFIXしたい時は上記childImageSharp {...}の中を以下のように変更
    sizes(maxWidth: 300) {
    ...GatsbyImageSharpSizes
    }
    */
    render={(data) => {
        const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
    });
    if (!image) { return null; }
    // const imageSizes = image.node.childImageSharp.sizes;
    // const imageSizes = 10;
    // const imageSizes = props.fluid
    // const imageSizes = 500
    console.log(image.node.childImageSharp.fluid)
    return (
        // <Img alt={props.alt} />
        // <Img alt={props.alt} fluid={imageSizes} />
        <Img fluid={image.node.childImageSharp.fluid} alt={props.alt} />
    );
    }}
    />
)
export default Image
