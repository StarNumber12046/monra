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
    switch (code) {
        case 0:
            console.log("")
                
        break;
        case 1:
            console.log(`\x1b[1mInitialize a project with Monra\x1b[0m
\x1b[33mUsage\x1b[0m: monra init
\x1b[33mAliases\x1b[0m: i
\x1b[33mOptions\x1b[0m: null`)
        break;
        case 2:
            console.log(`\x1b[1mCreate a new package the in specific folder\x1b[0m
\x1b[33mUsage\x1b[0m: monra create [directory-name]
\x1b[33mAliases\x1b[0m: build
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 3:
            console.log(`\x1b[1mList all packages in the directory\x1b[0m
\x1b[33mUsage\x1b[0m: list
\x1b[33mAliases\x1b[0m: -l, --list
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 4:
            console.log(`\x1b[1mPublish all packages in a packages folder\x1b[0m
\x1b[33mUsage\x1b[0m: monra publish
\x1b[33mAliases\x1b[0m: -p, --publish
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 5:
            console.log(`\x1b[1mRun a command in one package, or in all packages\x1b[0m
\x1b[33mUsage\x1b[0m: monra run [directory || -g]
\x1b[33mAliases\x1b[0m: r
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 6:
            console.log(`\x1b[1mGet the version of current installed Monra\x1b[0m
\x1b[33mUsage\x1b[0m: monra version
\x1b[33mAliases\x1b[0m: -v, --version
\x1b[33mOptions\x1b[0m: null`)

        break;
        case 7:
            console.log(`\x1b[1mCreate a file in a package or in all packages\x1b[0m
\x1b[33mUsage\x1b[0m: monra touch [name] [directory || -g]
\x1b[33mAliases\x1b[0m: t
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 8:
            console.log(`\x1b[1mCreate a directory in a package or in all packages\x1b[0m
\x1b[33mUsage\x1b[0m: monra mkdir [name] [directory || -g]
\x1b[33mAliases\x1b[0m: mk
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 9:
            console.log(`\x1b[1mRemove a file from a package or from all packages\x1b[0m
\x1b[33mUsage\x1b[0m: monra rm [file] [directory || -g]
\x1b[33mAliases\x1b[0m: null
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        case 10:
            console.log(`\x1b[1mRemove a package from the packages directory\x1b[0m
\x1b[33mUsage\x1b[0m: monra delete [name]
\x1b[33mAliases\x1b[0m: d
\x1b[33mOptions\x1b[0m: -d or --directory (delete from directory name)`)

        break;
        case 11:
            console.log(`\x1b[1mRemove a directory from a package or from all packages\x1b[0m
\x1b[33mUsage\x1b[0m: monra rmdir [name] [directory || -g]
\x1b[33mAliases\x1b[0m: null
\x1b[33mOptions\x1b[0m: -g, --global`)

        break;
        default:
            console.log("Code?")
            
    }
}