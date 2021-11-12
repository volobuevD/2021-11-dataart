import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';    //имитация действия пользователя

//Relay testing
import React from 'react';
const { Suspense } = React;
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Organizations from './Organizations';
import { OrganizationsQuery } from '../../__generated__/OrganizationsQuery.graphql';

import data from '../../data.json';
import data2 from '../../data';

it('renders test', async () => {
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

    screen.debug();


    const titleSection = await screen.findByText('Organizations');
    expect(titleSection).toBeInTheDocument();

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

// expect(screen.getByText(/find/i)).toBeInTheDocument();   //есть в документе. get когда элемент 100% сесть на странице
// expect(screen.queryByText(/find/i).toBeInTheDocument();  //query когда элемент может и не быть
// expect(screen.findByText(/find/i).toBeInTheDocument();   //find при асинхронных запросах

      // .toBeNull();                //может отсутствовать
      // .toMatchSnapshot()          //создает слепок компонента в папке __snapshots__
      // .toHaveBeenCalledTimes(5)   //был вызван 5 раз
      // .toHaveClass('class')       //есть класс class
      // .toHaveStyle('style')       //есть стиль

      //userEvent.тип()   //имитация действия пользователя