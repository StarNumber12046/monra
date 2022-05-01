#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nvea_1 = require("nvea");
const version_1 = require("./command/version");
const create_1 = require("./command/create");
const init_1 = require("./command/init");
const delete_1 = require("./command/delete");
const publish_1 = require("./command/publish");
const list_1 = require("./command/list");
const help_1 = require("./command/help");
const run_1 = require("./command/run");
const touch_1 = require("./command/touch");
const mkdir_1 = require("./command/mkdir");
const rm_1 = require("./command/rm");
const rmdir_1 = require("./command/rmdir");
new nvea_1.Command({ name: "init", aliases: ["i", "-i", "--init"] })
    .on(res => (0, init_1.init)(res.args));
new nvea_1.Command({ name: "create", aliases: ["build"] })
    .on(res => (0, create_1.create)(res.args));
new nvea_1.Command({ name: "delete", aliases: ["d"] })
    .on(res => (0, delete_1._delete)(res.args));
new nvea_1.Command({ name: "publish", aliases: ["--publish", "-p", "p"] })
    .on(res => (0, publish_1.publish)(res.args));
new nvea_1.Command({ name: "version", aliases: ["--version", "-v"] })
    .on(res => (0, version_1.version)(res.args));
new nvea_1.Command({ name: "help", aliases: ["--help", "-h"] })
    .on(res => (0, help_1.help)(res.args));
new nvea_1.Command({ name: "list", aliases: ["--list", "-l"] })
    .on(res => (0, list_1.list)(res.args));
new nvea_1.Command({ name: "run", aliases: ["r"] })
    .on(res => (0, run_1.run)(res.args));
new nvea_1.Command({ name: "touch", aliases: ["t"] })
    .on(res => (0, touch_1.touch)(res.args));
new nvea_1.Command({ name: "mkdir", aliases: ["mk"] })
    .on(res => (0, mkdir_1.mkdir)(res.args));
new nvea_1.Command({ name: "rm", aliases: [] })
    .on(res => (0, rm_1.rm)(res.args));
new nvea_1.Command({ name: "rmdir", aliases: [] })
    .on(res => (0, rmdir_1.rmdir)(res.args));
