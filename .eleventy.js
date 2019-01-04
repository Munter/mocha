module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/css");
  eleventyConfig.addPassthroughCopy("docs/js");
  eleventyConfig.addPassthroughCopy("docs/images");
  eleventyConfig.addPassthroughCopy("docs/CNAME");
  eleventyConfig.addPassthroughCopy("docs/_headers");


  /* Markdown Plugins */
  const markdown = require("markdown-it")({
    html: true,
    linkify: true
  });

  markdown.use(require("markdown-it-anchor"), {
    permalink: true,
    permalinkBefore: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });

  markdown.use(require("markdown-it-attrs"), {
    leftDelimiter: '{:',
    rightDelimiter: '}'
  });

  markdown.use(require("markdown-it-prism"));

  eleventyConfig.setLibrary("md", markdown);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "docs",
      includes: "_includes",
      output: "docs/_site"
    }
  };
};
