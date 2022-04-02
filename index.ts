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
import { run } from "./command/run";
import { touch } from "./command/touch";
import { mkdir } from "./command/mkdir";
import { rm } from "./command/rm";
import { rmdir } from "./command/rmdir";

new Command({ name: "init", aliases: ["i", "-i", "--init"] })
.on(res => init(res.args));

new Command({ name: "create", aliases: ["build"] })
.on(res => create(res.args));

new Command({ name: "delete", aliases: ["d"] })
.on(res => _delete(res.args));

new Command({ name: "publish", aliases: ["--publish", "-p", "p"] })
.on(res => publish(res.args))

new Command({ name: "version", aliases: ["--version", "-v"] })
.on(res => version(res.args))

new Command({ name: "help", aliases: ["--help", "-h"] })
.on(res => help(res.args))

new Command({ name: "list", aliases: ["--list", "-l"] })
.on(res => list(res.args))

new Command({ name: "run", aliases: ["r"] })
.on(res => run(res.args))

new Command({ name: "touch", aliases: ["t"] })
.on(res => touch(res.args))

new Command({ name: "mkdir", aliases: ["mk"] })
.on(res => mkdir(res.args))

new Command({ name: "rm", aliases: [] })
.on(res => rm(res.args))

new Command({ name: "rmdir", aliases: [] })
.on(res => rmdir(res.args))