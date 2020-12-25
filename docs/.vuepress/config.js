module.exports = {
  base: '/wheelUI/',
  title: 'UI轮子',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '文档', link: '/' },
      { text: 'gitee', link: 'https://gitee.com/chen_pi_pi/wheel-ui/' },
      { text: 'github', link: 'https://github.com/csyuser/wheelUI' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/introduction',
          '/install',
          '/get-started',
        ]
      },
      {
        title: '组件',
        children: ['/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
        ],
      },

    ]
  }
}