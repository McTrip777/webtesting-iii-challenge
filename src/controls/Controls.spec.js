// Test away!
import React from 'react';
import { render, fireEvent, } from 'react-testing-library';
import renderer from 'react-test-renderer';
// import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('open/close', () => {
    it.skip('should confirm the Controls open/close click', () => {
        const closed = jest.fn();

        const {getByText} = render(<Controls toggleClosed={closed}/>);

        fireEvent.click(getByText(/close gate/i))
        // fireEvent.click(getByText(/locked/i))

        expect(closed).toHaveBeenCalled()
    }); 

    it.skip('should confirm the Controls open/close click', () => {
        const open = jest.fn();
        const props ={
            closed: true
        }

        const {getByText} = render(<Controls {...props} toggleClosed={open}/>);

        fireEvent.click(getByText(/open gate/i))
        // fireEvent.click(getByText(/locked/i))

        expect(open).toHaveBeenCalled()
    }); 

describe('lock/unlock', () => {

   it('should confirm the Controls lock click', () => {
        const locked = jest.fn();
        const props = {
            locked: false,
            closed: true
        }
        const {getByText} = render(<Controls {...props} toggleLocked={locked}/>);

        fireEvent.click(getByText(/lock gate/i))
        // fireEvent.click(getByText(/locked/i))

        expect(locked).toHaveBeenCalled()
   }); 

   it('should confirm the Controls unlock click', () => {
    const unlocked = jest.fn();
    const props = {
        locked: true,
        closed: true
    }
    const {getByText} = render(<Controls {...props} toggleLocked={unlocked}/>);

    fireEvent.click(getByText(/unlock gate/i))
    // fireEvent.click(getByText(/locked/i))

    expect(unlocked).toHaveBeenCalled()
}); 
});

});