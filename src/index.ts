import Time = require('3h-time');

const defaultLevels = [
    'error',
    'warn',
    'info',
    'log',
    'debug'
];

type LoggerOutputMethod = (msg: string) => void;

interface LoggerOptions {
    logTime?: boolean;
    timeFormat?: string;
    upperCasePrefix?: boolean;
    prefixLength?: number;
    fixAlign?: (prefix: string) => string;
    levels?: string[];
    level?: number;
    output?: LoggerOutputMethod;
}

class Logger implements LoggerOptions {

    constructor(options: LoggerOptions = {}) {
        Object.assign(this, options);
        this.enableAll();
    }

    static readonly defaultLevels = defaultLevels;

    logTime = true;
    timeFormat = '[HH:MM:SS]';

    upperCasePrefix = true;
    prefixLength = 6;
    fixAlign(prefix: string) {
        return prefix.padStart(this.prefixLength);
    }

    levels = defaultLevels;
    level!: number;

    output: LoggerOutputMethod = console.log;

    setLevel(prefix: string) {
        const level = this.levels.indexOf(prefix);
        if (level !== -1) {
            this.level = level;
        }
        return this;
    }
    enableAll() {
        this.level = this.levels.length - 1;
        return this;
    }
    disableAll() {
        this.level = -1;
        return this;
    }

    format(prefix: string, message: string) {

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

    print(prefix: string, message: string) {
        const { level, levels } = this;
        if (levels.indexOf(prefix) <= level) {
            this.output(this.format(prefix, message));
            return true;
        } else {
            return false;
        }
    }

    error(message: string) {
        return this.print('error', message);
    }
    warn(message: string) {
        return this.print('warn', message);
    }
    info(message: string) {
        return this.print('info', message);
    }
    log(message: string) {
        return this.print('log', message);
    }
    debug(message: string) {
        return this.print('debug', message);
    }

}

export = Logger;
