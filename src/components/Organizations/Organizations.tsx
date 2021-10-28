import React from 'react'
import { Popover, Divider } from 'antd'
import { TeamOutlined, BookOutlined } from '@ant-design/icons'

import './Organizations.scss'

import { AppRepositoryNameQueryResponse } from '../../__generated__/AppRepositoryNameQuery.graphql'

interface OrganizationsProps {
  organizations?: NonNullable<AppRepositoryNameQueryResponse['user']>['organizations']    //NonNullable удалит null / undefined из типа.
}

const Organizations = (props: OrganizationsProps) => {
  // console.log(props)
  const { organizations } = props
  // console.log(organizations)

  return (
    <section className="organizations">
      <h4>Organizations</h4>
      <div className="logo-container">
        {organizations ? (
          organizations.nodes?.map(item => {
            return item ? (
              <div key={item.id}>
                <Popover
                  placement="topLeft"
                  // visible={true}
                  overlayStyle={{ width: '20vw' }}
                  content={
                    <div className="pop-window">
                      <div className="pop-content">
                        <img className="pop-avatar" src={`${item.avatarUrl}`} alt="avatar" />
                        <div className="pop-text">
                          <p className="pop-header">{item.name}</p>
                          <p className="pop-text">{item.description}</p>
                        </div>
                      </div>
                      <Divider style={{ margin: '5px 0 5px 0', padding: '0', width: '100%' }} />
                      <div className="pop-footer">
                        <BookOutlined />
                        <p>{item.membersWithRole.totalCount} repositories</p>
                        <TeamOutlined />
                        <p>{item.itemShowcase.items.totalCount} members</p>
                      </div>
                    </div>
                  }
                >
                  <img className="avatar" src={`${item.avatarUrl}`} alt="avatar" />
                </Popover>
              </div>
            ) : null
          })
        ) : (
          <p>No organizations</p>
        )}
      </div>
      <p className="block">Block or Report</p>
    </section>
  )
}

export default Organizations
