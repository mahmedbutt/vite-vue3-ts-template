import { mount } from '@vue/test-utils'
import SvgIcon from '~/components/modules/icons/SvgIcon.vue'

describe('SvgIcon', () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  it('should display Component', () => {
    const props = {
      name: 'info_outline',
      width: 24,
      height: 24,
    }

    const wrapper = mount(SvgIcon, {
      global: {
        stubs: ['svgImage'],
      },
      props,
    } as any)

    expect(wrapper).toBeTruthy()
  })
  /* eslint-enable */
})
