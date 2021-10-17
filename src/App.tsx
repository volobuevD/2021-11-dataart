// import React, { FC } from 'react';
// import { Button } from 'antd';
// import './App.less';

// const App: FC = () => (
//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
// );

// export default App;

import React from 'react';
import './App.less';
// import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import { Button } from 'antd';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery<AppRepositoryNameQuery>(
  RelayEnvironment, 
  RepositoryNameQuery, 
  {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.

interface AppProps {
  preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>
}

function App(props: AppProps) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository?.name}</p>
        <Button type="dashed">PRESS ME</Button>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot