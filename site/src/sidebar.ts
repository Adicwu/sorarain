export default {
  '/zh/guide': [
    {
      text: '基础',
      children: [
        {
          text: '设计',
          link: '/zh/guide/base-design'
        },
        {
          text: '安装',
          link: '/zh/guide/base-install'
        },
        {
          text: '快速开始',
          link: '/zh/guide/base-start'
        }
      ]
    },
    {
      text: '进阶',
      children: [
        {
          text: '内置过渡动画',
          link: '/zh/guide/advanced-transitions'
        },
        {
          text: '更新日志',
          link: '/zh/guide/advanced-changelog'
        }
      ]
    }
  ],
  '/zh/component': [
    {
      text: '节能组件',
      children: [
        {
          text: 'KeepAlives 多缓存',
          link: '/zh/component/keep-alives'
        }
      ]
    },
    {
      text: '动画组件',
      children: [
        {
          text: 'ListModifyTransition 列表CURD过渡',
          link: '/zh/component/list-modify-transition'
        },
        {
          text: 'ListEnterTransition 列表进入过渡',
          link: '/zh/component/list-enter-transition'
        }
      ]
    },
    {
      text: '数据展示',
      children: [
        {
          text: 'VirtualWaterfall 瀑布流虚拟列表',
          link: '/zh/component/virtual-waterfall'
        }
      ]
    },
    {
      text: '交互组件',
      children: [
        {
          text: 'Drag 拖拽容器',
          link: '/zh/component/drag'
        }
      ]
    }
  ],
  '/zh/use': [
    {
      text: '组合式API',
      children: [
        {
          text: 'useElementRect',
          link: '/zh/use/use-element-rect'
        },
        {
          text: 'useEventListener',
          link: '/zh/use/use-event-listener'
        },
        {
          text: 'usePage',
          link: '/zh/use/use-page'
        },
        {
          text: 'useRelation',
          link: '/zh/use/use-relation'
        },
        {
          text: 'useResizeListener',
          link: '/zh/use/use-resize-listener'
        },
        {
          text: 'useWindowSize',
          link: '/zh/use/use-window-size'
        }
      ]
    },
    {
      text: '辅助函数',
      children: [
        {
          text: 'preventDefault',
          link: '/zh/use/prevent-default'
        },
        {
          text: 'mountComponent',
          link: '/zh/use/mount-component'
        },
        {
          text: 'elVisibleObserver',
          link: '/zh/use/el-visible-observer'
        }
      ]
    },
    {
      text: '自定义指令',
      children: [
        {
          text: 'clickOutside',
          link: '/zh/use/v-click-outside'
        },
        {
          text: 'lazyBackgroudImg',
          link: '/zh/use/v-lazy-backgroud-img'
        },
        {
          text: 'lazyImgSrc',
          link: '/zh/use/v-lazy-img-src'
        },
        {
          text: 'moveable',
          link: '/zh/use/v-moveable'
        }
      ]
    }
  ]
}
