const Logger = require('../dist/index'),
    logger = new Logger({ timeFormat: '[YYYY-MM-DD HH:MM:SS.sss]' });

logger.print('custom', 'Custom messages.');

logger.setLevel('log');

logger.error('Some errors.');
logger.warn('Some warnings.');
logger.info('Some information.');
logger.log('Some logs.');
logger.debug('This should not be seen!');
