import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { h } from 'vue'
import ListEnterTransition from '../ListEnterTransition.vue'

describe('ListEnterTransition.vue', () => {
  test('visible事件 正确推送', () => {
    const wrapper = mount(ListEnterTransition)

    expect(wrapper.emitted('visible')).toBeUndefined()
  })
  test('默认插槽运行正常', () => {
    const wrapper = mount(ListEnterTransition, {
      slots: {
        default: () =>
          [1, 2, 3].map((item) =>
            h(
              'div',
              {
                key: item
              },
              item
            )
          )
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
