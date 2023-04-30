import { launchResolvers } from '@/schema/launch.resolver';
import { typeDefs } from '@/schema/typeDefs';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

const server = new ApolloServer({
  resolvers: [launchResolvers],
  typeDefs: typeDefs,
});

export default startServerAndCreateNextHandler(server);