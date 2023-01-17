module.exports = function (eleventyConfig) {
    // Ajout de la collection "images"
    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/img/uploads");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");

    const glob = require("glob");
    eleventyConfig.addCollection("images", function(collection) {
        const images = glob.sync("./sources/img/uploads/*");
        console.log(images);
        return images.map(image => {
            return {
                url: image,
                name: path.basename(image)
            };
        });
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
