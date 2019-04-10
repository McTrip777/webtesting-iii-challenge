// Test away!
import React from 'react';
import { render, fireEvent, } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('<Controls />', () => {
    it('should confirm the Controls open/close click', () => {
        const closed = jest.fn();

        const {getByText} = render(<Controls closed={closed}/>);

        fireEvent.click(getByText(/open gate/i))
        // fireEvent.click(getByText(/locked/i))

        expect(closed).toHaveBeenCalled()
   }); 

//    it('should confirm the Controls lock/unlock click', () => {
//         const locked = jest.fn();

//         const {getByText} = render(<Controls locked={locked}/>);

//         fireEvent.click(getByText(/lock gate/i))
//         // fireEvent.click(getByText(/locked/i))

//         expect(locked).toHaveBeenCalled()
//    }); 
});