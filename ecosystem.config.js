module.exports = {
  apps: [
    {
      name: 'my-loopback-app',
      script: 'dist/index.js',
      instances: 8,
      autorestart: true,
      watch: false,
      max_memory_restart: '3G',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
