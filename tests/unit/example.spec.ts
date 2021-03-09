import { shallowMount } from '@vue/test-utils'
import ExploreContainer from '@/components/ExploreContainer.vue'

describe('ExploreContainer.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'ExploreContainer'
    const wrapper = shallowMount(ExploreContainer, {
      props: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })
})
