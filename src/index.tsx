import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

const { REACT_APP_API_URL } = process.env;

const client = new ApolloClient({
    // uri: `${REACT_APP_API_URL}graphql/` || '',
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
