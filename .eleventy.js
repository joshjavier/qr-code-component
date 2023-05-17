module.exports = (config) => {
  // Images are already optimized, so copy them to output directory.
  config.addPassthroughCopy('./src/images')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
