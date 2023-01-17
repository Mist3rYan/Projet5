module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};

eleventyConfig.addCollection('prestations', (collection) => {
      const prestations = collection.getFilteredByGlob(`src/prestations/*.md`);
    return prestations;
  });