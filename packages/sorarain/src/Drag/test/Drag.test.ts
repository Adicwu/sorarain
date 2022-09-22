import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { h } from 'vue'
import Drag from '../index'

const testSlot = {
  default: () =>
    h('img', {
      style: {
        width: '100px',
        height: '100px'
      },
      src: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1h37057ew9lj307409wq3m.jpg'
    })
}

describe('drag.ts', () => {
  test('正常执行', () => {
    const wrapper = mount(Drag, {
      slots: testSlot
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  // test('拖拽测试',()=>{
  //   const wrapper = mount(Drag, {
  //     slots: testSlot
  //   })
  //   wrapper.trigger('drag')
  // })
})
