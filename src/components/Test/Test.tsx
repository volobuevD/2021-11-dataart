import type { AppRepositoryNameQuery } from '../../__generated__/AppRepositoryNameQuery.graphql' //сгенерированный репозиторий

const React = require('React');

const {graphql, useLazyLoadQuery} = require('react-relay');

const Test = {
  const data = useLazyLoadQuery<AppRepositoryNameQuery>(
    graphql`
    query AppRepositoryNameQuery {
      user(login: "M0nica") {
        name
        organizations(first: 4) {
          totalCount
          nodes {
            description
            avatarUrl
            name
            id
            membersWithRole {
              totalCount
            }
            itemShowcase {
              items {
                totalCount
              }
            }
          }
        }
      }
    }
    `,
);

//  return <h1>{data.user?.name}</h1>;
}

export default Test