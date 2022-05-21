const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,

  css: {
    modules: true,
    sourceMap: true
  }
})
