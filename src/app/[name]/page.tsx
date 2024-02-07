import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Detail from "../../components/Detail";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

const Page = () => {
  return (
    <ApolloProvider client={client}>
      <Detail />
    </ApolloProvider>
  );
};

export default Page;
