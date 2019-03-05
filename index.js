module.exports = {
  name: 'vuepress-theme-cute',
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }]
  ]
}
