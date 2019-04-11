// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<DashBoard />', () => {
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
      expect(tree).toMatchSnapshot();
    });

describe('Basically the App of this file', () => {
  it('should confirm unlocked', () => {
    const { getByText } = render(<Dashboard />);

		getByText(/unlocked/i);
  })
  
  it('should confirm open', () => {
    const { getByText } = render(<Dashboard />);

		getByText(/open/i);
  })
  it('should confirm lock gate', () => {
    const { getByText } = render(<Dashboard />);

		getByText(/lock gate/i);
  })
  it('should confirm close gate', () => {
    const { getByText } = render(<Dashboard />);

		getByText(/close gate/i);
  })
})
});