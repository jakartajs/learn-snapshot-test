import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import enzymeSerializer from 'enzyme-to-json/serializer';

import SearchInput from '../SearchInput';

expect.addSnapshotSerializer(enzymeSerializer);

describe('SearchInput Shallow Component', () => {
  test('should have search input with empty search method', () => {
    const result = shallow(<SearchInput search={() => {}} />);
    expect(result).toMatchSnapshot();
  });

  test('should have search input with empty search method', () => {
    const result = shallow(<SearchInput search={() => {}} />);

    result.setState({
      value: '123'
    });
    expect(result).toMatchSnapshot();
  });
});
