import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css, keyframes } from 'react-emotion'
import hero from '../img/hero.jpg'

const trippykeyframe = keyframes`
  from {
    filter: hue-rotate();
  }
  to {
    filter: hue-rotate(360deg);
  }
`
const Img = styled('img')`
  background-image: url(${hero});
  width: 100vw;
  height: 400px;
  position: relative;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  @media (min-width: 426px) {
    height: calc(100vh - 88px);
  }
`

const trippy = css`
  animation: ${trippykeyframe} 10s ease infinite;
`

export default class IndexPage extends React.Component {
  state = {
    isTrippy: false,
  }
  toggleTrippy = () => {
    this.setState(({ isTrippy }) => ({ isTrippy: !isTrippy }))
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Img
          onClick={this.toggleTrippy}
          className={this.state.isTrippy && trippy}
        />
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
