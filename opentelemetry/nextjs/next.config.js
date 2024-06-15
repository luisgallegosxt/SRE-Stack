// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/:path*', // Flask service
        },
        {
          source: '/api/db/:path*',
          destination: 'http://localhost:8001/:path*', // FastAPI service
        },
        {
          source: '/api/go/:path*',
          destination: 'http://localhost:8002/:path*', // Go service
        },
        // {
        //   source: '/api/rust/:path*',
        //   destination: 'http://localhost:8003/:path*', // Rust service
        // },
        {
          source: '/api/cpp/:path*',
          destination: 'http://localhost:8004/:path*', // C++ service
        },
      ];
    },
  };
  