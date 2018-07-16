### Base project folder for eXist-DB development

To start virtual machine:

```$ vagrant up```

(will download Centos 7, install Docker, grab eXist-DB Docker image, and run eXist as daemon; port 8080 forwarded to localhost on host machine)

To install node packages:

```$ npm install```

To copy files to eXist-DB:

```$ gulp4 build && gulp4 copy```

To watch for changes and build/copy automatically:

```$ gulp4 watch```

Edit `gulpfile.js` to configure.