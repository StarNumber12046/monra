const error = (string) => {
    console.log("\x1b[31m["+new Date().getHours()+":"+new Date().getMinutes()+"]\x1b[0m "+string);
};

const warn = (string) => {
    console.log("\x1b[33m["+new Date().getHours()+":"+new Date().getMinutes()+"]\x1b[0m "+string);
};

const success = (string) => {
    console.log("\x1b[32m["+new Date().getHours()+":"+new Date().getMinutes()+"]\x1b[0m "+string);
};