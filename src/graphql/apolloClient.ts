import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/", fetch }),
});

export default apolloClient;
