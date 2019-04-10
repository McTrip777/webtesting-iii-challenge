// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<App />', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // idea for another test
  });