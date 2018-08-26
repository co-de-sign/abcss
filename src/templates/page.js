/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'

import '../base/normalize.scss'
import '../base/typography.scss'

import './style.scss'

export default function Page({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <article className="page-container" dangerouslySetInnerHTML={{ __html: html }} />
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
