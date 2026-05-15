module.exports = {
  apps: [
    {
      name: "agent-starter-embed",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 8500,
      },
    },
  ],
};
