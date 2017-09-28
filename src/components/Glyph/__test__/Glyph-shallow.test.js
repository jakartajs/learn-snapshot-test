import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import enzymeSerializer from 'enzyme-to-json/serializer';

import Glyph from '../Glyph';

expect.addSnapshotSerializer(enzymeSerializer);

jest.mock('classnames', () => {
  const data = (...props) => {
    return props[props.length-1];
  };
  return data;
});

describe('Glph Shallow Component', () => {
  test('should have empty span', () => {

    const result = shallow(<Glyph className={''} name={''} />);
    expect(result).toMatchSnapshot();
  });

  test('should have span with classname search', () => {
    const result = shallow(<Glyph className={''} name={'search'} />);
    expect(result).toMatchSnapshot();
  });
});
