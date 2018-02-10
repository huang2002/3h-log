/**
 * @file 3h-log.js
 * @author 3h
 */

/**
 * @description The main object.
 */
class Logger {
    out = null;
    /**
     * @description The constructor.
     * @param {stream.Writable} out The output stream.
     */
    constructor(out = process.stdout) {
        this.out = out;
    }
}

module.exports = Logger;