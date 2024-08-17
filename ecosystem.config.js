module.exports = {
  apps: [{
    name: "my-loopback-app",
    script: "./index.js", // Update this with the correct path to your entry file
    instances: 1, // Number of instances to run (1 for single instance)
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "production",
    },
  }]
};
