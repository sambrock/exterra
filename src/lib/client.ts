import { cache } from 'react';
// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL, REVALIDATE_API } from './constants';
import {
  GetLaunchDocument,
  GetLaunchQuery,
  GetUpcomingLaunchesDocument,
  GetUpcomingLaunchesQuery,
} from '@/__generated__/graphql';

// let client: ApolloClient<any> | null = null;

// export const getClient = () => {
//   // Create a new client if there's no existing one
//   // or if running on the server
//   if (!client || typeof window === 'undefined') {
//     client = new ApolloClient({
//       link: new HttpLink({
//         uri: `${BASE_URL}/api/graphql`,
//       }),
//       cache: new InMemoryCache(),
//     });
//   }

//   return client;
// };

export const getUpcomingLaunches = cache(async () => {
  const res = await fetch(`${BASE_URL}/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GetUpcomingLaunchesDocument.loc?.source.body }),
    next: {
      revalidate: REVALIDATE_API,
    },
  });

  const data = await res.json();

  return data as { data: GetUpcomingLaunchesQuery };
});

export const getLaunch = cache(async (id: string) => {
  const res = await fetch(`${BASE_URL}/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GetLaunchDocument.loc?.source.body, variables: { id } }),
    next: {
      revalidate: 0,
    },
  });

  const data = await res.json();

  return data as { data: GetLaunchQuery };
});
