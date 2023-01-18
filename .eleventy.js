const Image = require("@11ty/eleventy-img");
const glob = require("glob-promise");

module.exports = function (eleventyConfig) {
    // Ajout de la collection "images"
    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/img/uploads");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    
    eleventyConfig.addCollection('images', async collectionApi => {

      let files = await glob('../public/img/images/*.jpeg');
      //Now filter to non thumb-
      let images = files.filter(f => {
        return f.indexOf('../public/img/images/thumb-') !== 0;
      });
  
      let collection = images.map(i => {
        let alt = i.split('/').pop();
        alt=alt.split('.')[0];
        return {
          path: i.replace('../public/img/images/', '/img/images/'),
          thumbpath: i.replace('../public/img/images/', '/img/images/thumb-'),
          name: i.split('/').pop(),
          alt: alt
        }
      });
  
      return collection;
  
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
