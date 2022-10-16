import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_API_URL as string;

const requestHeaders = {
  // Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
};

const graphqlRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: requestHeaders,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60,
    },
  },
});

export default graphqlRequestClient;
