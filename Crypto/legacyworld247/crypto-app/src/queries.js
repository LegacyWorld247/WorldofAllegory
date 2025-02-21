// queries.js: Defines GraphQL queries for trading data
import { gql } from "@apollo/client";

export const PRICE_QUERY = gql`
  query GetPairPrices($pairId: ID!) {  # Changed String! to ID! for subgraph compatibility
    pairHourDatas(
      where: { pair: $pairId }
      first: 24
      orderBy: hourStartUnix
      orderDirection: desc
    ) {
      hourStartUnix
      open
      high
      low
      close
    }
  }
`;