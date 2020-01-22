import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import UserSearchForm from '@/views/UserSearchForm'
import UserProfile from '@/views/UserProfile'
import initialState from '@/store/state'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state
  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    })
    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    }
  }
  beforeEach(() => {
    state = { ...initialState }
  })
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
    state.user = userFixture
    const { userProfile } = build()
    expect(userProfile().vm.user).toBe(state.user)
  })
})
