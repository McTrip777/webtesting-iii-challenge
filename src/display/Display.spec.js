// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Display />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('red/green', () => {
  it('should confirm the Displays color green', () => {
      const lockedClass = jest.fn();
      const props = {
        closed: false,
        locked: false
      } 

      const {getByClassName} = render(<Display {...props} className={lockedClass}/>);

      fireEvent.click(getByClassName(/lockedClass/i))
      // fireEvent.click(getByText(/locked/i))

      expect(lockedClass).toHaveBeenCalled()
  }); 

});