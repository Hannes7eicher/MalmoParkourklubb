const fs = require("fs");
const { create } = require("xmlbuilder2");

const sitemapFilePath = "/home/hannes/Github/MalmoParkourklubb/public/sitemap.xml";

const siteURL = "https://malmoparkour.se"; // Replace with your actual site URL
const routes = [
  { path: "/", lastmod: "2023-08-21T19:53:09+00:00" }, // Add the appropriate lastmod for each route
  { path: "/About", lastmod: "2023-08-21T19:53:09+00:00" },
  { path: "/Membership", lastmod: "2023-08-21T19:53:09+00:00" },
];

const sitemap = create({
  encoding: "UTF-8",
}).ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

routes.forEach((route) => {
  sitemap.ele("url")
    .ele("loc")
    .txt(`${siteURL}${route.path}`)
    .up()
    .ele("lastmod")
    .txt(route.lastmod)
    .up()
    .up();
});

const xml = sitemap.end({ prettyPrint: true });

fs.writeFileSync(sitemapFilePath, xml, "utf8"); // Save the sitemap.xml file

console.log("Sitemap generated successfully.");
