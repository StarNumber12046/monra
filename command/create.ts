import * as readline from "node:readline";
import * as fs from "node:fs";
import { execSync } from "node:child_process";
import { exit } from "node:process";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

export const create = (x: string) => {
    const packages = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (!x[1]) {
        console.log("\x1b[31m[monora]\x1b[0m  Directory name is undefined (use: monra create <directory-name>)");
        exit()
    }
    if (monra?.client == "npm" || monra?.client == "yarn") {
       rl.question("\x1b[2m[1/3]\x1b[0m \x1b[1mPackage Name:\x1b[0m (@"+monra?.name+"/"+x[1]+") ", (name: any) => {
            if (!name) name = "@"+monra?.name+"/"+x[1]
            rl.question("\x1b[2m[2/3]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ", (v: any) => {
                if (!v) v = "1.0.0"
                rl.question("\x1b[2m[3/3]\x1b[0m \x1b[1mJs or Ts:\x1b[0m (js) ", (lang: any) => {
                    if (!lang) lang = "js";
                    if (lang == "ts" || lang == "js") {
                        fs.mkdirSync(monra?.directory+"/"+x[1]);
                        if (lang == "ts") {
                            fs.mkdirSync(monra?.directory+"/"+x[1]+"/src");
                            fs.appendFileSync(monra?.directory+"/"+x[1]+"/src/index.ts", "")
                            fs.appendFileSync(monra?.directory+"/"+x[1]+"/package.json", 
                            JSON.stringify({
                                name: name.toLowerCase(),
                                main: "src/index.js",
                                verison: v
                            }))
                            monra['packages'].push({ name: name, path: monra?.directory+"/"+x[1] })
                            fs.writeFileSync("monora.json", JSON.stringify(monra))
                            if (monra?.client == "yarn") {
                                execSync("yarn add "+name)
                            }

                            if (monra?.client == "npm") {
                                execSync("npm i "+name)
                            }
                        }

                        if (lang == "js") {
                            fs.mkdirSync(monra?.directory+"/"+x[1]+"/src");
                            fs.appendFileSync(monra?.directory+"/"+x[1]+"/src/index.js", "")
                            fs.appendFileSync(monra?.directory+"/"+x[1]+"/package.json", 
                            JSON.stringify({
                                name: name.toLowerCase(),
                                main: "src/index.js",
                                verison: v
                            }))
                            monra['packages'].push({ name: name, path: monra?.directory+"/"+x[1] })
                            fs.writeFileSync("monora.json", JSON.stringify(monra))
                            if (monra?.client == "yarn") {
                                execSync("yarn add "+name)
                            }

                            if (monra?.client == "npm") {
                                execSync("npm i "+name)
                            }
                        }
                    } else {
                        console.log("\x1b[31m[monora]\x1b[0m  Language not supported");
                        exit()
                    }
                })
            })
        })
    } else {
        console.log("\x1b[31m[monora]\x1b[0m  Client isn't supported. (supported: npm or yarn)");
        rl.close();
    }
};