module.exports = {
  siteMetadata: {
    title: 'ABC Style Structure',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
