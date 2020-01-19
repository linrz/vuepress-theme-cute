module.exports = {
    theme: require.resolve('../..'),
    themeConfig: {
      home: 'vuepress-theme-cute',
      nav: [
        {
          text: 'about',
          link: '/about.html'
        }
      ],
      copyright: {
        name: 'Example'
      },
      sharePlatforms: ['weibo', 'wechat', 'twitter', 'download']
    },
    
  }