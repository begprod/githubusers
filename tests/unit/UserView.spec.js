jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'
import initialState from '@/store/state'
import actions from '@/store/actions'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state
  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions
      })
    })
    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    }
  }
  beforeEach(() => {
    jest.resetAllMocks()
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
  it('searches for a user when received "submitted"', () => {
    const expectedUser = 'begprod'
    const { userSearchForm } = build()
    userSearchForm().vm.$emit('submitted', expectedUser)
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })
})
