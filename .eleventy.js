module.exports = function (eleventyConfig) {
    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};