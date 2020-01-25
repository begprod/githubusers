import { shallowMount } from '@vue/test-utils'
import UserProfile from '@/components/UserProfile'
import user from './fixtures/user'

describe('VUserProfile', () => {
  let props
  const build = () => {
    const wrapper = shallowMount(UserProfile, {
      propsData: props
    })
    return {
      wrapper,
      avatar: () => wrapper.find('.user-profile__avatar'),
      name: () => wrapper.find('.user-profile__name'),
      bio: () => wrapper.find('.user-profile__bio')
    }
  }
  beforeEach(() => {
    props = {
      user
    }
  })
  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders main components', () => {
    const { avatar, name, bio } = build()
    expect(avatar().exists()).toBe(true)
    expect(avatar().attributes().src).toBe(props.user.avatar_url)
    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)
    expect(bio().exists()).toBe(true)
    expect(bio().text()).toBe(props.user.bio)
  })
})
