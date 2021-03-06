module.exports = {
  siteMetadata: {
    title: `Angel Sanchez - Front-end Web Developer.`,
    description: `Front-end Developer based in Brighton. Modern Front-end Development and Responsive Desing, Website performance and optimisation, HTML emails, React UI's.`,
    author: `Angel Sanchez | Front-end Web Developer`,
    siteUrl: `https://www.angel-sg.com`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Projects',
        link: '/projects'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
      {
        name: 'Success',
        link: '/success'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.angel-sg.com`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }, 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }, 
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136792428-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angel Sanchez - Front-end Web Developer.`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/maskable_icon.png`,
        icons:[{
          src: `favicon/maskable_icon.png`, // This path is relative to the root of the site.
          sizes: `196x196`,
          type: `image/png`,
          purpose: `any maskable`
        }, {
          src: `favicon/maskable_icon.png`, // This path is relative to the root of the site.
          sizes: `512x512`,
          type: `image/png`,
          purpose: `any maskable`
        }] 
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
