/**
 * @file 3h-log.js
 * @author 3h
 */

/**
 * @description The main object.
 */
class Logger {
    /**
     * @description The constructor.
     * @param {stream.Writable} out The output stream.
     */
    constructor(out = process.stdout) {
        /**
         * @description The output stream.
         * @type {stream.Writable}
         */
        this.out = out;
        /**
         * @description The prefixes.
         * @type {[x: string]: string}
         */
        this.prefixes = {
            info: '[INFO]',
            warn: '[WARN]',
            error: '[ERROR]',
            trace: '[TRACE]'
        };
    }
    /**
     * @description To log some infomation.
     * @param {string} msg The message.
     * @returns {Logger} Return this.
     */
    info(msg) {
        this.out.write(this.prefixes.info + ' ' + msg + '\n');
        return this;
    }
    /**
     * @description To log some warnings.
     * @param {string} msg The message.
     * @returns {Logger} Return this.
     */
    warn(msg) {
        this.out.write(this.prefixes.warn + ' ' + msg + '\n');
        return this;
    }
    /**
     * @description To log some errors.
     * @param {string} msg The message.
     * @returns {Logger} Return this.
     */
    error(msg) {
        this.out.write(this.prefixes.error + ' ' + msg + '\n');
        return this;
    }
    /**
     * @description To log some traces.
     * @param {string} msg The message.
     * @returns {Logger} Return this.
     */
    trace(msg) {
        this.out.write(this.prefixes.trace + ' ' + msg + '\n');
        return this;
    }
}

Logger.default = new Logger();

module.exports = Logger;