module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,pug,js,ts,vue}'],
    separator: '_', // to make usable with 'pugjs'
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };