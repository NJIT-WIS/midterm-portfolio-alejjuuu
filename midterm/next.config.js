const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Base path for the application on GitHub Pages
  basePath: isProd ? '/midterm-portfolio-alejjuuu' : '',
  // Asset prefix for static assets
  assetPrefix: isProd ? '/midterm-portfolio-alejjuuu/' : '',
  
  // Image optimization settings
  images: {
    unoptimized: true, // Disable Next.js' built-in image optimization
  },

  // Experimental features can change in future releases
  experimental: {
    output: 'standalone', // Enable static export in newer versions of Next.js
  },

  // Other configurations...
  // Add any other configurations you might have here.
};
