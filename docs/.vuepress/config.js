module.exports = {
  base: '/nonebot-annotation/',
  title: 'Nonebot2文档注解',
  plugins: ['@vuepress/last-updated'],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: 'logo.png',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '插件实例', link: '/plugin/' },
      { text: 'Nb2详解', link: '/nonebot/' },
      { text: '拓展协议', link: '/protocol/'},
      { text: 'Github', link: 'https://github.com/JustUndertaker/nonebot-annotation' }
    ],
    sidebar: {
      '/plugin/': [
        {
          title: '插件实例',
          sidebarDepth: 2,
          children: [
            ['/plugin/', '插件说明'],
          ]
        }
      ],
      '/nonebot/': [
        {
          title: 'Nb2详解',
          sidebarDepth: 2,
          children: [
            ['/nonebot/', '组件说明'],
          ]
        }
      ],
      '/protocol/':[
        {
          title: '拓展协议',
          sidebarDepth: 2,
          children: [
			['/protocol/','协议说明'],
          ]
        }
      ]
    }
  },
  description: '总结的nonebot文档注解《山海经注（划掉）》'
}
