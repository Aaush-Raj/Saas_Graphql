import { ApolloClient, InMemoryCache } from '@apollo/client';

// Apollo client for the SpaceX GraphQL API
const spacexClient = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache()
});

// Apollo client for the AniList GraphQL API
const aniListClient = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache()
});

export { spacexClient, aniListClient };
