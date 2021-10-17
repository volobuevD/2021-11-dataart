//import * as fs from 'fs';

const fs = require("fs");

const SCSS_NAME = "antd.customize.scss";
const LESS_NAME = "antd.customize.less";
const READ_PATH = `./src/${SCSS_NAME}`;
const WRITE_PATH = `./src/${LESS_NAME}`;

fs.readFile(READ_PATH, "utf8", (err, data) => {
  if (err) throw err;

  const result = data.replace(/\$/g, "@");

  fs.writeFile(WRITE_PATH, result, "utf8", (err) => {
    if (err) throw err;
    console.log(`File "${LESS_NAME}" is written`);
  });
});




// "start": "nodemon -w craco.config.js -w ./src/styles/antd.customize.scss --exec \"node ./scripts/write-antd-less && craco start\""