module.exports = {
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-preset-env')
    ]
  }
}
