const express = require("express")
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer")
const cors = require("cors")
const http = require("http")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
const models = require("./models")
//const user = require("./models/User")

async function startServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const port = 3004

  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    //playground: false,
    //context: { models },
    context: () => ({
      models: require("./models"),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(cors(), express.json(), expressMiddleware(server))

  httpServer.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  })
}
startServer()
