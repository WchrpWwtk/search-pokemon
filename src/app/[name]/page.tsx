"use client";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/graphql/apolloClient";
import Detail from "../../components/Detail";

const Page = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Detail />
    </ApolloProvider>
  );
};

export default Page;
