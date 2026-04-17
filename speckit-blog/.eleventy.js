module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownItAttrs = require("markdown-it-attrs");
  const pluginRss = require("@11ty/eleventy-plugin-rss");

  eleventyConfig.addPlugin(pluginRss);

  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink()
    })
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "css/styles.css" });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("readableDate", function(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("htmlDateString", function(date) {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("keys", function(obj) {
    return Object.keys(obj);
  });

  eleventyConfig.addFilter("slugify", function(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
