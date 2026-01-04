import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
    // Use the injected env var or fallback
    uri: `${process.env.VITE_API_BASE_URL || "http://localhost:4000"}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("onboardx_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
