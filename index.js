var request = require('request');
const EventEmitter = require('events');
/** @module connection/cookie */

class KissanimeEvent extends EventEmitter() {}
const kissanimeEvent = new KissanimeEvent();

module.exports = {
    /**
     * Attempts connection to kissanime.to.
     * @param {string} [useragent] - The Client User-Agent String
     * @return {Object} cookie
     * @description Returns a session cookie
     */
    connect: function(useragent = null) {
        /**
         * @todo Implement request features
         * @todo Turn into an event based function
         * @todo Create non-blocking code for other module loading
         */
        useragent = useragent !== null ? useragent :
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36';
    }
};
