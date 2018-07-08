"use strict";
const Time = require("3h-time");
const defaultLevels = new Map([
    ['error', 0],
    ['warn', 1],
    ['info', 2],
    ['log', 3],
    ['debug', 4]
]);
class Logger {
    constructor(options = {}) {
        this.logTime = true;
        this.timeFormat = '[HH:MM:SS]';
        this.upperCasePrefix = true;
        this.prefixLength = 6;
        this.levels = defaultLevels;
        this.defaultLevel = 0;
        this.output = console.log;
        Object.assign(this, options);
        this.enableAll();
    }
    fixAlign(prefix) {
        return prefix.padStart(this.prefixLength);
    }
    getLevel(prefix) {
        const { levels } = this;
        return levels.has(prefix) ? levels.get(prefix) : this.defaultLevel;
    }
    setLevel(prefix) {
        const level = this.getLevel(prefix);
        if (level !== -1) {
            this.level = level;
        }
        return this;
    }
    enableAll() {
        this.level = Infinity;
        return this;
    }
    disableAll() {
        this.level = -Infinity;
        return this;
    }
    format(prefix, message) {
        let ans = '';
        if (this.logTime) {
            ans += Time.get(this.timeFormat) + ' ';
        }
        if (this.upperCasePrefix) {
            prefix = prefix.toUpperCase();
        }
        ans += this.fixAlign(prefix) + ': ';
        return ans + message;
    }
    isEnabled(prefix) {
        return this.getLevel(prefix) <= this.level;
    }
    print(prefix, message) {
        if (this.isEnabled(prefix)) {
            this.output(this.format(prefix, message));
            return true;
        }
        else {
            return false;
        }
    }
    error(message) {
        return this.print('error', message);
    }
    warn(message) {
        return this.print('warn', message);
    }
    info(message) {
        return this.print('info', message);
    }
    log(message) {
        return this.print('log', message);
    }
    debug(message) {
        return this.print('debug', message);
    }
}
Logger.defaultLevels = defaultLevels;
module.exports = Logger;
