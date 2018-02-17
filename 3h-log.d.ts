import stream from 'stream';

type WritableStream = stream.Writable;

declare class Logger {
    constructor(out?: WritableStream);
    static default: Logger;
    out: WritableStream;
    prefix: { [prefix: string]: string };
    preLen: number;
    showTime: boolean;
    write(prefix: string, msg: string): this;
    info(msg: string): this;
    error(msg: string): this;
    warn(msg: string): this;
    trace(msg: string): this;
}