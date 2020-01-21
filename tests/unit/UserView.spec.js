import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import UserSearchForm from '@/views/UserSearchForm'
import UserProfile from '@/views/UserProfile'

describe('UserView', () => {
  it('render the component', () => {
    const wrapper = shallowMount(UserView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('render child components', () => {
  const wrapper = shallowMount(UserView)
  const userSearchForm = wrapper.find(UserSearchForm)
  const userProfile = wrapper.find(UserProfile)
  expect(userSearchForm.exists()).toBe(true)
  expect(userProfile.exists()).toBe(true)
})
