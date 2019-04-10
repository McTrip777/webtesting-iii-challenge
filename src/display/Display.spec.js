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