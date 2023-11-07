const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the PREFIX environment variable to define the `assetPrefix` and `basePath`
  assetPrefix: isProd ? '/midterm-portfolio-alejjuuu/' : '',
  basePath: isProd ? '/midterm-portfolio-alejjuuu' : '',
  images: {
    domains: ['media.licdn.com'],
    unoptimized: true,
  },
  // ... other Next.js config
};
