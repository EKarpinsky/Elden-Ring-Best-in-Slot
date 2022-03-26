import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
   siteMetadata: {
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-source-filesystem`,
   ],
}

export default config
