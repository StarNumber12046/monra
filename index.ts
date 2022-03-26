import { Command } from "nvea";
import { version } from "./command/version";
import { create } from "./command/create";
import { init } from "./command/init";
import { list } from "./command/list";
import { publish } from "./command/publish";
import { exit } from "node:process";


new Command({ name: "init", aliases: ["-i", "--init", "--i", "-init"] })
.on(res => init(res.args));

new Command({ name: "create", aliases: ["add", "build"] })
.on(res => create(res.args));

new Command({ name: "list", aliases: ["--list", "-list", "-l", "--l"] })
.on(res => list(res.args));

new Command({ name: "publish", aliases: ["--publish", "-publish", "-p", "--p"] })
.on(res => publish(res.args))

new Command({ name: "version", aliases: ["--version", "-version", "-v", "--v"] })
.on(res => version(res.args))

/*
{
  "name": "monra",
  "version": "1.0.0",
  "description": "Mono Repo Administrator",
  "bin": {
    "monra": "./dist/index.js"
  },
  "type": "module",
  "scripts": {
    "dev": "tsc -w"
  },
  "main": "./dist/index.js",
  "repository": "https://github.com/Thebigbot0000/monra",
  "author": "Thebigbot",
  "license": "MIT",
  "dependencies": {
    "@types/node": "^17.0.23",
    "nvea": "^1.0.1",
    "tslib": "^2.3.1"
  }
}
*/