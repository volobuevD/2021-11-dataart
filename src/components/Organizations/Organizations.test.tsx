import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';    //имитация действия пользователя

//Relay testing
import React from 'react';
const { Suspense } = React;
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Organizations from './Organizations';
import { OrganizationsQuery, OrganizationsQueryResponse } from '../../__generated__/OrganizationsQuery.graphql';

import data from '../../data.json';
import data2 from '../../data';

function renderOrganization() {
    const mockEnvironment = createMockEnvironment();

    const { container } = render(
        <RelayEnvironmentProvider environment={mockEnvironment}>
            <Suspense fallback="Loading...">
                <Organizations />
            </Suspense>
        </RelayEnvironmentProvider>
    );

    mockEnvironment.mock.resolveMostRecentOperation((operation: any) =>
        MockPayloadGenerator.generate(operation, {
            Query(): OrganizationsQueryResponse {
                return {
                    user: {
                        name: 'asdas',
                        organizations: {
                            totalCount: 2,
                            nodes: [
                                {
                                    description: 'asdfasdasd',
                                    avatarUrl: '12312',
                                    name: '123123',
                                    id: '1',
                                    membersWithRole: {
                                        totalCount: 2
                                    },
                                    itemShowcase: {
                                        items: {
                                            totalCount: 2,
                                        }
                                    },
                                },

                            ],
                        }
                    }

                }
            }
        }),
    );

    return {
        mockEnvironment,
        container,
    }
}


// тест с пустым запросом
// тест с запросом
// тест наведения мыши на иконку (должен появиться список)

it('render function', () => {
    renderOrganization();
    
});




it('render Organization', async () => {
    const mockEnvironment = createMockEnvironment();

    mockEnvironment.mock.queueOperationResolver((operation) =>
        // или mockEnvironment.mock.resolveMostRecentOperation()
        MockPayloadGenerator.generate(operation),
    );

    render(
        <RelayEnvironmentProvider environment={mockEnvironment}>
            <Suspense fallback="Loading...">
                <Organizations />
            </Suspense>
        </RelayEnvironmentProvider>
    );

    // screen.debug();

    // another version to test 
    // expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    // mockEnvironment.mock.resolveMostRecentOperation((operation) => MockPayloadGenerator.generate(operation),);


    const titleSection = await screen.findByText('Organizations');
    expect(titleSection).toBeInTheDocument();

});

it('render loading async', () => {
    const mockEnvironment = createMockEnvironment();

    render(
        <RelayEnvironmentProvider environment={mockEnvironment}>
            <Suspense fallback="Loading...">
                <Organizations />
            </Suspense>
        </RelayEnvironmentProvider>
    )

    screen.debug();

    mockEnvironment.mock.resolveMostRecentOperation((operation: any) =>
        MockPayloadGenerator.generate(operation),
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});




//=============================================================
// function renderComponent() {
//     const mockEnvironment = createMockEnvironment();

//     const { rerender, container } = render(
//         <RelayEnvironmentProvider environment={mockEnvironment}>
//             <Suspense fallback="Loading...">
//                 <Organizations />
//             </Suspense>
//         </RelayEnvironmentProvider>
//     );

//     return {
//         rerender
//     }
// }

// //=============================================================

  // it('', () => {})       //сам тест
  // xit    //пропустить тест
  // fit    //делать только этот тест

  // screen.getByText
  // 1) role
  // 2) text
  // 3) id

    // userEvent.тип(объект)   //имитация действия пользователя (обертка для fireEvent)
    // fireEvent(объект)       // 
    // React.KeyboardEvent     //React events

// expect(screen.getByText(/find/i)).toBeInTheDocument();   //есть в документе. get когда элемент 100% сесть на странице
// expect(screen.queryByText(/find/i).toBeInTheDocument();  //query когда элемент может и не быть
// expect(screen.findByText(/find/i).toBeInTheDocument();   //find при асинхронных запросах

      // .toBeNull();                //может отцутствовать
      // .toMatchSnapshot()          //создает слепок компонента в папке __snapshots__
      // .toHaveBeenCalledTimes(5)   //был вызван 5 раз
      // .toHaveClass('class')       //есть класс class
      // .toHaveStyle('style')       //есть стиль



