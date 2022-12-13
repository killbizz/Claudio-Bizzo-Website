// next.config.js

const { withAxiom } = require('next-axiom');

const securityHeaders = [
  {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
  },
  {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
  }   
];

module.exports = withAxiom({
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: false, 
  images: {
    domains: ['res.cloudinary.com'],
  }
})