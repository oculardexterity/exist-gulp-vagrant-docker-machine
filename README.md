### Base project folder for eXist-DB development

To start virtual machine:

```$ vagrant up```

(will download Centos 7, install Docker, grab eXist-DB Docker image, and run eXist as daemon; port 8080 forwarded to localhost on host machine)

To install node packages:

```$ npm install```

To copy files to eXist-DB:

```$ npm build && npm copy```

To watch for changes and build/copy automatically:

```$ npm watch```

Edit `gulpfile.js` to configure.