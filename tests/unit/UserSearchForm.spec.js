import { shallowMount } from '@vue/test-utils'
import UserSearchForm from '@/components/UserSearchForm'

describe('User search form', () => {
  const build = () => {
    const wrapper = shallowMount(UserSearchForm)
    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button')
    }
  }
  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render child components', () => {
    const { input, button } = build()
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })
  it('call submit event', () => {
    const expectUser = 'begprod'
    const { wrapper, input, button } = build()
    input().element.value = expectUser
    input().trigger('input')
    button().trigger('click')
    button().trigger('submit')
    expect(wrapper.emitted().submitted[0]).toEqual([expectUser])
  })
})
