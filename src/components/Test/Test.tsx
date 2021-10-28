import type { AppRepositoryNameQuery } from '../../__generated__/AppRepositoryNameQuery.graphql' //сгенерированный репозиторий

const React = require('React');

const { graphql, useLazyLoadQuery } = require('react-relay');



function Test() {
  const RepositoryNameQuery = graphql`
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
`

const data = useLazyLoadQuery(RepositoryNameQuery);

   return <h1>{data.user?.name}</h1>;
   
}

export default Test