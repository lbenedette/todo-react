import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'

describe('<Header />', () => {
  it('should have all filters', () => {
    const wrapper = shallow(<Header />)
    const filters = wrapper.find(FilterLink)

    expect(filters).toHaveLength(3);
    expect(filters.find({ filter: VisibilityFilters.SHOW_ALL })).toHaveLength(1)
    expect(filters.find({ filter: VisibilityFilters.SHOW_ACTIVE })).toHaveLength(1)
    expect(filters.find({ filter: VisibilityFilters.SHOW_COMPLETED })).toHaveLength(1)
  })
})