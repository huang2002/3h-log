# 3h-log

> A lib that helps you log things with various prefix easily.

## Install

```
$ npm install 3h-log
```

## Example

```javascript
const Logger = require('3h-log');

Logger.default.info('This is a piece of information logged by the default logger.');
// prints: [INFO] This is an information logged by the default logger.

const logger = new Logger();

logger.warn('This is a warning with default prefix.');
// prints: [WARN] This is a warning with default prefix.

logger.prefix.warn = '[Wanring]';
logger.warn('This is a warning with my prefix.');
// prints: [Wanring] This is a warning with my prefix.

```

## API

- Logger(out?: stream.Writable) - *The constructor of loggers.*
    - default - *An instance of `Logger`.*
- logger - ( Any instance of `Logger`. )
    - prefix - *The prefixes.*
        - info - *The prefix for `logger.info`.*
        - error - *The prefix for `logger.error`.*
        - warn - *The prefix for `logger.warn`.*
        - trace - *The prefix for `logger.trace`.*
    - info(msg: string) - *To log some information.*
    - error(msg: string) - *To log some errors.*
    - warn(msg: string) - *To log some warnings.*
    - trace(msg: string) - *To log some traces.*
