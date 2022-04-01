import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
   plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `pages`,
            path: `C:\\Users\\mitch\\WebstormProjects\\EldenRingBestInSlot\\EldenRingBestInSlot\\src\\pages`,
         },
      },
   ],
}

export default config
