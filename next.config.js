// next.config.js

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

module.exports = {
async headers() {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ]
},
}