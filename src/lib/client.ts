import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // Create a new client if there's no existing one
  // or if running on the server
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
