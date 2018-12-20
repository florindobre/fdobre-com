const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Florin Dobre's Portfolio - Webdev & Native developer`, // Navigation and Site Title
  siteTitleAlt: 'Florin Dobre', // Alternative Site title for SEO
  siteUrl: 'https://fdobre.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Check out my website and Github projects!',

  userTwitter: '@_florindobre', // Twitter Username
  ogSiteName: 'fdobre.com', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
