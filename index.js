#!/usr/bin/env node

const spawn = require("./prospawn");
const templates = require("./templates");
const chalk = require("chalk");

const [, , script, $1, $2, $3, $4] = process.argv;

console.log($1, $2);

if (script === "spinup") {
  const temp = templates[$1] ? templates[$1] : templates["reactwebp"];
  const name = $2 ? $2 : "myproject";

  spawn(
    `git clone --depth 1 ${temp} ${name} && cd ${name} && git remote rm origin && echo "Installing Dependencies" && npm install`
  ).then(() =>
    console.log(
      chalk.bgCyan.black(
        "Project Created, Enjoy! Make sure to join the Slack and Discord communities at devNursery.com and subscribe to my youtube channel at AlexMercedCoder.com"
      )
    )
  );
}
