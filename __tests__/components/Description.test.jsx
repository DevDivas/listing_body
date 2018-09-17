import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../client/components/Description';

describe('Description', () => {
  const wrapper = shallow(<Description
    descriptionBody="lorem ipsum"
    toggle={() => this.props.showDescription}
    showDescription={false}
  />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should have props descriptionBody', () => {
    expect(wrapper.props('descriptionBody')).toBeTruthy();
  });

  it('should have props toggle', () => {
    expect(wrapper.props('toggle')).toBeTruthy();
  });

  it('should have props showDescription', () => {
    expect(wrapper.props('showDescription')).toBeTruthy();
  });
});
