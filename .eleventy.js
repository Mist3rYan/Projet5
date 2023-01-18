const Image = require("@11ty/eleventy-img");
const glob = require("glob-promise");

module.exports = function (eleventyConfig) {
  // Ces dossiers sont clonés lors du build
  eleventyConfig.addPassthroughCopy("./src/img/uploads");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

 
  const THUMB = 250;
  const FULL = 650;

  (async () => {

    let options = {
      widths: [THUMB, FULL],
      formats: ['jpeg'],
      filenameFormat: function (id, src, width, format, options) {
        let origFilename = src.split('/').pop();
        //strip off the file type, this could probably be one line of fancier JS
        let parts = origFilename.split('.');
        parts.pop();
        origFilename = parts.join('.');

        if (width === THUMB) return `thumb-${origFilename}.${format}`;
        else return `${origFilename}.${format}`;
      },
      outputDir: "public/img/images/"
    };

    let files = await glob('src/img/uploads/*.{jpg,jpeg,png,gif}');
    for (const f of files) {
      console.log('doing f', f);
      let md = await Image(f, options);
    };

  })();
  // Ajout de la collection "images"
  eleventyConfig.addCollection('images', async collectionApi => {

    let files = await glob('public/img/images/*.jpeg');
    //Now filter to non thumb-
    let images = files.filter(f => {
      return f.indexOf('public/img/images/thumb-') !== 0;
    });

    let collection = images.map(i => {
      let alt = i.split('/').pop();
      alt = alt.split('.')[0];
      return {
        path: i.replace('public/img/images/', '/img/images/'),
        thumbpath: i.replace('public/img/images/', '/img/images/thumb-'),
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
