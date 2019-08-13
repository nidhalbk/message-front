import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHookProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './context';

const defaultState = {
  currentUser: {
    __typename: 'currentUser',
    user: null,
  },
};

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: window.sessionStorage,
});
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: defaultState,
    resolvers: {
      Mutation: {
        connectUser: async (_, { user }) => {
          const data = {
            currentUser: {
              __typename: 'currentUser',
              user: {
                ...user,
                __typename: 'user',
              },
            },
          };
          await window.localStorage.clear();
          cache.writeData({ data });
        },
      },
    },
  },
},);


const app = (
  <ApolloProvider client={client}>
    <ApolloHookProvider client={client}>
      <UserProvider>
        <App client={client} />
      </UserProvider>
    </ApolloHookProvider>
  </ApolloProvider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
