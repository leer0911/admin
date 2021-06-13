module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/theme.scss";`,
      },
      scss: {
        prependData: `@import "~@/theme.scss";`,
      },
    },
  },
};
