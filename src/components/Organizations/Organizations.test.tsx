import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';    //имитация действия пользователя

import Organizations from './Organizations';
import data from '../../data.json';
import data2 from '../../data';

const onChange = jest.fn();     //фейковая функция

describe('Organization component', () => {
    it('renders', () => {
        render(<Organizations/>);
        expect (screen.getByText('No organizations')).toBeInTheDocument;
        // expect(screen.getByText('No organizations')).toBeInTheDocument();
        // expect(screen.getByRole('section')).toBeInTheDocument();
    });

    it('render img', () => {
        render(<Organizations organizations={data2.user.organizations}/>);
        //screen.debug();     //отображение верстки
        const logo = screen.getAllByRole('img');
        expect(logo[0]).toHaveAttribute('src');
    })

    it('render popover', () => {
        render(<Organizations organizations={data2.user.organizations}/>);
        userEvent.hover(screen.getAllByRole('img')[0]);
        const avatar = screen.getAllByAltText('avatar');
        expect(avatar[0]).toBeInTheDocument;
    })
})


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