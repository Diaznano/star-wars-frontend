module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],
  deploy: {
    production: {
      key: "bach-dev.pem", // pem file generated when launching an instance
      user: "ubuntu", // ec2-user if you use aws linux kernel, ubuntu if you use ubuntu kernel
      host: "ec2-52-90-226-47.compute-1.amazonaws.com", // public ip address of the ec2 instance
      ref: "origin/main", // specify the branch where your code resides
      repo: "git@github.com:Diaznano/star-wars-frontend.git", //ssh git url of your repo 
      path: "/home/ubuntu/star-wars-frontend", // mention the path in ec2 instance where your code need to be eg /home/ec2-user
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};