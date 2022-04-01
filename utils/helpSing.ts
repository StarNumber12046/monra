// @ts-check

import * as fs from "fs";
import { exit } from "process";

/**
 * @name HelpSingle
 * @param {number} code - help code
 * @description get help
*/

/*
0: ""
1: "init"
2: "create"
3: "list"
4: "publish"
5: "run"
6: "version"
7: "touch"
8: "mkdir"
9: "rm"
10: "delete"
11: "rmdir"
*/

export const helpSing = (code: number) => {
    const packagesjson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    switch (code) {
        case 0:
            console.log(`\x1b[1m${packagesjson?.name}\x1b[0m - \x1b[1mv${packagesjson?.version}\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32minit\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mcreate\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mlist\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mpublish\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mrun\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mversion\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mtouch\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mmkdir\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mrm\x1b[0m
└─ \x1b[2mmonra\x1b[0m \x1b[32mdelete\x1b[0m`)
                
        break;
        case 1:
            console.log(`\x1b[1mInitialize a new project\x1b[0m
\x1b[33mUsage\x1b[0m: monra init
\x1b[33mAliases\x1b[0m: i
\x1b[33mOptions\x1b[0m: null`)
        break;
        case 2:
            console.log(`\x1b[1mCreate package\x1b[0m
\x1b[33mUsage\x1b[0m: monra create [directory-name]
\x1b[33mAliases\x1b[0m: build
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 3:
            console.log(`\x1b[1mGet package list\x1b[0m
\x1b[33mUsage\x1b[0m: list
\x1b[33mAliases\x1b[0m: -l, --list
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 4:
            console.log(`\x1b[1mPublish all package\x1b[0m
\x1b[33mUsage\x1b[0m: monra publish
\x1b[33mAliases\x1b[0m: -p, --publish
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 5:
            console.log(`\x1b[1mRun command in package\x1b[0m
\x1b[33mUsage\x1b[0m: monra run [directory || -g]
\x1b[33mAliases\x1b[0m: r
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 6:
            console.log(`\x1b[1mGet monra version\x1b[0m
\x1b[33mUsage\x1b[0m: monra version
\x1b[33mAliases\x1b[0m: -v, --version
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 7:
            console.log(`\x1b[1mCreate file in package\x1b[0m
\x1b[33mUsage\x1b[0m: monra touch [name] [directory || -g]
\x1b[33mAliases\x1b[0m: t
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 8:
            console.log(`\x1b[1mCreate directory in package\x1b[0m
\x1b[33mUsage\x1b[0m: monra mkdir [name] [directory || -g]
\x1b[33mAliases\x1b[0m: mk
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 9:
            console.log(`\x1b[1mDelete file in package\x1b[0m
\x1b[33mUsage\x1b[0m: monra rm [file] [directory || -g]
\x1b[33mAliases\x1b[0m: null
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 10:
            console.log(`\x1b[1mDelete package\x1b[0m
\x1b[33mUsage\x1b[0m: monra delete [name]
\x1b[33mAliases\x1b[0m: d
\x1b[33mOptions\x1b[0m: -d or --directory (delete from directory name)`)

        break;
        case 11:
            console.log(`\x1b[1mRemove directory in package\x1b[0m
\x1b[33mUsage\x1b[0m: monra rmdir [name] [directory || -g]
\x1b[33mAliases\x1b[0m: null
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        default:
            console.log("Code?")
            
    }
}