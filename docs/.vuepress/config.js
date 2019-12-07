module.exports = {
  base: '/',
  title: 'VuePress',
  description: 'Vue 驱动的静态网站生成器',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-preset-env')
    ]
  }
}
