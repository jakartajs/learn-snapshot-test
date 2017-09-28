import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import enzymeSerializer from 'enzyme-to-json/serializer';

import Glyph from '../Glyph';

expect.addSnapshotSerializer(enzymeSerializer);

jest.mock('classnames', () => {
  const data = () => { };
  return data;
});

describe('Glph Component', () => {
  test('should have undefined classNames props', () => {
    const glyph = shallow(<Glyph className={''} name={''} />);
    expect(glyph.props().className).toBeUndefined();
  });
});
