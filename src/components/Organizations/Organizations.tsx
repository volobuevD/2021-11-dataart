import { Popover, Divider } from 'antd'
import { TeamOutlined, BookOutlined } from '@ant-design/icons'
import Icons from '../Icons';

import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'

import { OrganizationsQuery } from '../../__generated__/OrganizationsQuery.graphql';

import styles from './Organizations.module.scss'
// interface OrganizationsProps {
// organizations?: NonNullable<AppRepositoryNameQuery['user']>['organizations']    //NonNullable удалит null / undefined из типа.
// }

// Define a query
const ORGANIZATION_QUERY_INFO = graphql`
  query OrganizationsQuery($count: Int) {
    user(login: "M0nica") {
      name
      organizations(first: $count) {
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

const Organizations = () => {

  const data = useLazyLoadQuery<OrganizationsQuery>(
    ORGANIZATION_QUERY_INFO,
    { count: 4 },
    { fetchPolicy: 'store-or-network' },
  );

  return (
    <section className={styles.organizations}>

      <Icons
        name='documents-outline'
        color='#000'
        size='32'
        className='button-left-panel'
      />

      {/* <div>{data.user!.name}</div> */}
      <h4>Organizations</h4>
      <div className={styles.logoContainer}>
        {data.user && data.user.organizations ? (
          data.user.organizations.nodes?.map(item => {
            return item ? (
              <div key={item.id}>
                <Popover
                  placement="topLeft"
                  // visible={true}
                  overlayStyle={{ width: '20vw' }}
                  content={
                    <div className={styles.popWindow}>
                      <div className={styles.popContent}>
                        <img className={styles.popAvatar} src={`${item.avatarUrl}`} alt="avatar" />
                        <div className={styles.popText}>
                          <p className={styles.popHeader}>{item.name}</p>
                          <p className={styles.popText}>{item.description}</p>
                        </div>
                      </div>
                      <Divider style={{ margin: '5px 0 5px 0', padding: '0', width: '100%' }} />
                      <div className={styles.popFooter}>

                        <BookOutlined />
                        <p>{item.membersWithRole.totalCount} repositories</p>
                        <TeamOutlined />
                        <p>{item.itemShowcase.items.totalCount} members</p>
                      </div>
                    </div>
                  }
                >
                  <img className={styles.avatar} src={`${item.avatarUrl}`} alt="avatar" />
                </Popover>
              </div>
            ) : null
          })
        ) : (
          <div>No organizations</div>
        )}
      </div>
      <div className={styles.block}>Block or Report</div>
    </section>
  )
}

export default Organizations;