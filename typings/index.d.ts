declare type LoggerOutputMethod = (msg: string) => void;
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
declare class Logger implements Required<LoggerOptions> {
    constructor(options?: LoggerOptions);
    static readonly defaultLevels: Map<string, number>;
    logTime: boolean;
    timeFormat: string;
    upperCasePrefix: boolean;
    prefixLength: number;
    fixAlign(prefix: string): string;
    levels: Map<string, number>;
    level: number;
    defaultLevel: number;
    output: LoggerOutputMethod;
    getLevel(prefix: string): number;
    setLevel(prefix: string): this;
    enableAll(): this;
    disableAll(): this;
    format(prefix: string, message: string): string;
    isEnabled(prefix: string): boolean;
    print(prefix: string, message: string): boolean;
    error(message: string): boolean;
    warn(message: string): boolean;
    info(message: string): boolean;
    log(message: string): boolean;
    debug(message: string): boolean;
}
export = Logger;
//# sourceMappingURL=index.d.ts.map