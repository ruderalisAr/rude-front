// sanity.cli.js
import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "jkst7y0a",
    dataset: "production",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  graphql: [
    {
      tag: "default",
      playground: true,
      generation: "gen3",
      nonNullDocumentFields: false,
    },
  ],
  vite: (config) => config,
})
// skMEKDMpaYj1Us5Kan3WTiHkHMCJGlSQgkkIkkGomst1TG02TKGNcO2L6qnQ0qIsgglwVlHsM74qe69EVQBZZ1dmzOcFHEFh229Qw9FfYJkGzmrRlCDAYFbruHPglERxpEYlYGHaI32JAGSIr11sII1oVRzHzAoxD2ikjCB24gcMD3GHcfgT
