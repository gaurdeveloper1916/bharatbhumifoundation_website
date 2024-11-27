module.exports = {
    apps: [
      {
        name: 'bumisewa_website',
        script: 'npm',
        args: 'run start:prod',
        exp_backoff_restart_delay: 100,
      },
    ],
  };
  