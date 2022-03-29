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

new Command({ name: "run", aliases: ["r"] })
.on(res => run(res.args))

