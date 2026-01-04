import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import { store } from "./store/store";
import { client } from "./graphql/client";

import PersonalScreen from "./domains/personal/PersonalScreen";
import BusinessScreen from "./domains/business/BusinessScreen";
import TeamsScreen from "./domains/teams/TeamsScreen";
import ProductsScreen from "./domains/products/ProductsScreen";

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Routes>
          {/* Default entry */}
          <Route path="/" element={<Navigate to="personal" replace />} />

          {/* Step routes */}
          <Route path="personal" element={<PersonalScreen />} />
          <Route path="business" element={<BusinessScreen />} />
          <Route path="teams" element={<TeamsScreen />} />
          <Route path="products" element={<ProductsScreen />} />

          {/* Safety fallback */}
          <Route path="*" element={<Navigate to="personal" replace />} />
        </Routes>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
