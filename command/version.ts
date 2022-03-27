// @ts-check

import * as packagesjson from "../package.json";

/**
 * @param {string} x - res.args
 * @description get current version
*/

export const version = (x: string) => {
    console.log(packagesjson.version)
};