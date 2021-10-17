// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  artifactDirectory: "./src/__generated__",
  schema: "schema.graphql",
  src: "./src",
  // watch: true,
  language: "typescript",
  customScalars: {
    DateTime: "string",
  }
}