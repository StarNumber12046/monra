import { question } from 'readline-sync';
import * as fs from 'fs';
import { exit } from 'process';
/**
 * @name ErrorInit
 * @description Init error
*/


export class ErrorInit {
    constructor() {
        console.log("\x1b[31m[monra]\x1b[0m monra.json doesn't exist");
        let yn = question('\n\x1b[2m[monra]\x1b[0m \x1b[1mDo you want to init project? (y/n) ');
        if (yn == "y" || yn == "Y" || yn == "" || yn == "yes" || yn == "Yes") {
            let name = question('\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (root) ');
            if (!name) name = "root";
            let v = question('\n\x1b[2m[2/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ');
            if (!v) v = "1.0.0";
            let dir = question('\n\x1b[2m[3/4]\x1b[0m \x1b[1mDirectory:\x1b[0m (packages) ');
            if (!dir) dir = "packages";
            let client = question('\n\x1b[2m[4/4]\x1b[0m \x1b[1mUse yarn, pnpm or npm:\x1b[0m (npm) ');
            if (!client) client = "npm";
            fs.appendFileSync("package.json", JSON.stringify({
              name: name.toLowerCase(),
              private: true,
              dependencies: {},
              workspaces: [dir.toLowerCase()+"/*"]
            }));
          
            fs.appendFileSync("monra.json", JSON.stringify({
              name: name.toLowerCase(),
              version: v.toLowerCase(),
              client: client.toLowerCase(),
              directory: dir.toLowerCase(),
            }));
          
            fs.mkdirSync(dir.toLowerCase())
          
            console.log("\n\x1b[32m[monra]\x1b[0m Create mono repo project!");;
        }

        if (yn == "n" || yn == "N" || yn == "no" || yn == "No") {
            console.log("\x1b[32m[monra]\x1b[0m Cancel!");
            exit()
        }
    }
}