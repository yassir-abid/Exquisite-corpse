/**
 * Liste des niveaux de log
 *
 * "fatal" (60):
 *     The service/app is going to stop or
 *     become unusable now. An operator should definitely look into this soon.
 * "error" (50): Fatal for a particular request,
 *     but the service/app continues servicing other requests.
 *     An operator should look at this soon(ish).
 * "warn" (40):
 *     A note on something that should probably
 *     be looked at by an operator eventually.
 * "info" (30):
 *     Detail on regular operation.
 * "debug" (20):
 *     Anything else, i.e. too verbose to be included in "info" level.
 * "trace" (10):
 *     Logging from external libraries used by
 *     your app or very detailed application logging.
 */

const bunyan = require('bunyan');

const streams = [];

streams.push({
    level: 'error',
    path: './logs/error.log',
    type: 'rotating-file',
    period: '1d',
    count: 3,
});

const logger = bunyan.createLogger({
    name: 'Cadex API',
    streams,
});

module.exports = logger;
