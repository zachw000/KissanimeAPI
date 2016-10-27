"use strict";
var request = require('request');
const EventEmitter = require('events');
/** @module connection/cookie */

class KissanimeEvent extends EventEmitter {}
const kissanimeEvent = new KissanimeEvent();

module.exports = {
    useragent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36",
    jar: request.jar(),
    /**
     * Attempts connection to kissanime.to.
     * @param {string} [userAgent] - User-Agent string to send to kissanime for verification.
     * @return {Object} cookie
     * @description Returns a session cookie
     */
    connect: function(userAgent = null) {
        /**
         * @todo Implement request features
         * @todo Create non-blocking code for other module loading
         */
        this.useragent = userAgent !== null ? userAgent :
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36';
        kissanimeEvent.emit("connect", this.useragent);
    }
};

// Connect to kissanime and grab auth data.
kissanimeEvent.on("connect", function(useragent) {
    console.log("Connection Request Called");
    request({
        uri: "https://kissanime.to",
        method: "GET",
        followRedirect: true,
        maxRedirects: 10,
        headers: {
            'User-Agent': useragent
        },
        jar: module.exports.jar
    }, function (error, response, body) {
        // Verify User-Agent string
        console.log(module.exports.useragent);

    });
});
