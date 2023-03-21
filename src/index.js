

const { ApolloServer } = require('apollo-server')


// 引入定义的graphql的schema，定义的对象和函数

const { typeDefs } = require('./schema')

const { resolvers } = require('./resolvers')

const port = process.env.PORT || 9090;


const server = new ApolloServer({ resolvers, typeDefs });


server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));

