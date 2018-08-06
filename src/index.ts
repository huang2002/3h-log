import Time = require('3h-time');

const defaultLevels = new Map([
    ['error', 0],
    ['warn', 1],
    ['info', 2],
    ['log', 3],
    ['debug', 4]
]);

type LoggerOutputMethod = (msg: string) => void;

interface LoggerOptions {
    logTime?: boolean;
    timeFormat?: string;
    upperCasePrefix?: boolean;
    prefixLength?: number;
    fixAlign?: (prefix: string) => string;
    level?: number;
    defaultLevel?: number;
    output?: LoggerOutputMethod;
}

class Logger implements Required<LoggerOptions> {

    constructor(options: LoggerOptions = {}) {
        Object.assign(this, options);
        this.enableAll();
    }

    static readonly defaultLevels = defaultLevels;

    logTime = true;
    timeFormat = '[HH:mm:SS]';

    upperCasePrefix = true;
    prefixLength = 6;
    fixAlign(prefix: string) {
        return prefix.padStart(this.prefixLength);
    }

    levels = defaultLevels;
    level!: number;
    defaultLevel = 0;

    output: LoggerOutputMethod = console.log;

    getLevel(prefix: string) {
        const { levels } = this;
        return levels.has(prefix) ? levels.get(prefix) as number : this.defaultLevel;
    }

    setLevel(prefix: string) {
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

    isEnabled(prefix: string) {
        return this.getLevel(prefix) <= this.level;
    }

    print(prefix: string, message: string) {
        if (this.isEnabled(prefix)) {
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
