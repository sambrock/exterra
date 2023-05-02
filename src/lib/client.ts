import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL } from './constants';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // Don't try to create a client if app is not running yet

  return null;

  // Create a new client if there's no existing one
  // or if running on the server
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: `${BASE_URL}/api/graphql`,
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
