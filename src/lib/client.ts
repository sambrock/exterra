import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL, REVALIDATE_API } from './constants';
import { GetUpcomingLaunchesDocument, GetUpcomingLaunchesQuery } from '@/__generated__/graphql';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
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

export const getUpcomingLaunches = async () => {
  const client = getClient();
  return await client.query<GetUpcomingLaunchesQuery>({
    query: GetUpcomingLaunchesDocument,
    context: {
      fetchOptions: {
        next: { revalidate: REVALIDATE_API },
      },
    },
  });
};
