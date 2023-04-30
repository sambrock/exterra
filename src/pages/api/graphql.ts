import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { launchResolver } from '@/lib/schema/launch.resolver';
import { typeDefs } from '@/lib/schema/typeDefs';

const server = new ApolloServer({
  resolvers: [launchResolver],
  typeDefs: typeDefs,
});

export default startServerAndCreateNextHandler(server);
