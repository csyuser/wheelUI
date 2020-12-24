module.exports = {
  title: 'UI轮子',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install',
          '/get-started',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      },

    ]
  }
}