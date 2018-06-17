import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'react-emotion'
import hero from '../img/hero.jpg'

// const Wrapper = styled('section')`
//   position: relative;
//   min-height: 300px;
// `
//
// const BgImg = styled('img')`
//   background-image: url(${hero});
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   min-height: 300px;
//   height: auto;
//   @media (min-width: ${props => props.theme.responsive.small}) {
//     height: ${props => props.height || 'auto'};
//   }
//   & > img {
//     object-fit: ${props => props.fit || 'cover'} !important;
//     object-position: ${props => props.position || '50% 50%'} !important;
//   }
//   &::before {
//     content: '';
//     background: rgba(0, 0, 0, 0.25);
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100%;
//     width: 100%;
//     z-index: 1;
//   }
// `
//
// const Title = styled('h1')`
//   font-size: 3em;
//   text-transform: capitalize;
//   font-weight: 600;
//   position: absolute;
//   width: 100%;
//   max-width: ${props => props.theme.sizes.maxWidthCentered};
//   padding: 0 1rem;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: white;
// `
//
// const Hero = props => (
//   <Wrapper>
//     <div style={{ position: 'relative' }}>
//       <BgImg height={props.height} />
//       <Title>Dixie Chooks</Title>
//     </div>
//   </Wrapper>
// )

const Img = styled('img')`
  background-image: url(${hero});
  width: 100vw;
  height: calc(100vh - 52px);
  position: relative;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Img />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </React.Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
