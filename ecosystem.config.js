module.exports = {
  apps: [
    {
      name: 'CRS_DEV',
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
      log_file: '/home/crsapp/orgi-crs/logs/pm2/pm2.log',
    },
  ],
};
