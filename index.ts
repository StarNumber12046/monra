#!/usr/bin/env ts-node

import { Command } from "nvea";
import { version } from "./command/version";
import { create } from "./command/create";
import { init } from "./command/init";
import { _delete } from "./command/delete";
import { publish } from "./command/publish";
import { exit } from "node:process";
import { list } from "./command/list";
import { help } from "./command/help";

new Command({ name: "init", aliases: ["-i", "--init"] })
.on(res => init(res.args));

new Command({ name: "create", aliases: ["build"] })
.on(res => create(res.args));

new Command({ name: "delete", aliases: ["d"] })
.on(res => _delete(res.args));

new Command({ name: "publish", aliases: ["--publish", "-p"] })
.on(res => publish(res.args))

new Command({ name: "version", aliases: ["--version", "-v"] })
.on(res => version(res.args))

new Command({ name: "help", aliases: ["--help", "-h"] })
.on(res => help(res.args))

new Command({ name: "list", aliases: ["--list", "-l"] })
.on(res => list(res.args))

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