/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'

import '../base/normalize.scss'
import '../base/typography.scss'
import './page.scss'

export default function Page({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="page-container">
      <h1 className="title">{frontmatter.title}</h1>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: {
      frontmatter: {
        path: PropTypes.string,
        title: PropTypes.string,
      },
      html: PropTypes.string,
    },
  }),
}

Page.defaultProps = {
  data: {},
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
