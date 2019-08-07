// Test away!
import React from 'react';
import { render, fireEvent, getByText } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';
import { toHaveClass } from "jest-dom";
expect.extend({ toHaveClass });

describe('<Display />', () => {
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Display />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('Check it its present', () => {
  it('should confirm the Displays are showing', () => {
      const props = {
        closed: true,
      } 

      const {getByText} = render(<Display {...props} />);

      getByText(/closed/i);
  }); 

  it('should confirm the Displays are showing', () => {
    const props = {
      closed: false,
    } 

    const {getByText} = render(<Display {...props} />);

    getByText(/open/i);
}); 

});

describe('red/green', () => {
  it('should confirm the Displays color red', () => {
      const props = {
        closed: true,
        locked: true
      } 

      const {getByText} = render(<Display {...props} />);
      const lockRed = getByText(/locked/i)

      expect(lockRed).toHaveClass("red-led")
  }); 

  it('should confirm the Displays color green', () => {
    const props = {
      closed: true,
      locked: false
    } 

    const {getByText} = render(<Display {...props} />);
    const lockGreen = getByText(/locked/i)

    expect(lockGreen).toHaveClass("green-led")
}); 

});