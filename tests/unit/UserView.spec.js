import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import UserSearchForm from '@/views/UserSearchForm'
import UserProfile from '@/views/UserProfile'

describe('UserView', () => {
  const build = () => {
    const wrapper = shallowMount(UserView, {
      data: () => ({
        user: {}
      })
    })
    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    }
  }
  it('render component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render child components', () => {
    const { userSearchForm, userProfile } = build()
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })
  it('user profile props bindings', () => {
    const { wrapper, userProfile } = build()
    wrapper.setData({
      user: {
        name: 'Billy'
      }
    })
    expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })
})
