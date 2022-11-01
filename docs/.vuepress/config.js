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
      { text: '拓展协议', link: '/protocol/' },
      { text: 'Github', link: 'https://github.com/JustUndertaker/nonebot-annotation' }
    ],
    sidebar: {
      '/plugin/': [
        {
          title: '插件实例',
          sidebarDepth: 2,
          children: [
            ['/plugin/', '导言'],
          ]
        }
      ],
      '/nonebot/': [
        {
          title: 'Nb2详解',
          sidebarDepth: 2,
          children: [
            ['/nonebot/', '导言'],
            ['/nonebot/bot', '从简单机器人开始'],
            ['/nonebot/driver', '后端驱动Driver'],
            ['/nonebot/adapter', '适配器Adapter'],
            ['/nonebot/matcher', '响应器Matcher'],
            ['/nonebot/plugin', '插件Plugin'],
            ['/nonebot/config', '配置Config'],
            ['/nonebot/summary', '总结：从一条消息的出发'],
          ]
        }
      ],
      '/protocol/': [
        {
          title: '拓展协议',
          sidebarDepth: 2,
          children: [
            ['/protocol/', '导言'],
          ]
        }
      ]
    }
  },
  description: '总结的nonebot文档注解《山海经注（划掉）》'
}
