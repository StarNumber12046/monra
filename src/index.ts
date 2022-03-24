import { Command } from "nvea";
import { create } from "./command/create";
import { init } from "./command/init";
import { list } from "./command/list";
import { publish } from "./command/publish";

new Command({ name: "init", aliases: ["-i", "--init", "--i", "-init"] })
.on(res => init(res));

new Command({ name: "create", aliases: ["add", "build"] })
.on(res => create(res));

new Command({ name: "list", aliases: ["--list", "-list", "-l", "--l"] })
.on(res => list(res));

new Command({ name: "publish", aliases: ["--publish", "-publish", "-p", "--p"] })
.on(res => publish(res))

new Command({ name: "version", aliases: ["--version", "-version", "-v", "--v"] })
.on(res => publish(res))
