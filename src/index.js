import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

const gqlEndpoint = 'http://mygqlendpoint.com';

function graphQLFetcher(graphQLParams) {
  return fetch(gqlEndpoint, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);
