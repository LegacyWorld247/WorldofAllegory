import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SUBGRAPH_URL || "http://localhost:3001/subgraphs/name/ianlapham/uniswap-v3-polygon", // Uses proxy for local dev
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: "all", // Log errors without crashing
    },
  },
});

export default client;
