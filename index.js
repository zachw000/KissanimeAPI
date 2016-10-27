"use strict";
var request = require('request'),
    cheerio = require('cheerio');
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
        this.useragent = userAgent !== null ? userAgent : this.useragent;
        kissanimeEvent.emit("connect", this.useragent);
    }
};

/**
 * Connect to kissanime and grab auth data.
 * @desc Connects to Kissanime server
 */
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
    }, function(error, response, body) {
        // Verify User-Agent string
        console.log(module.exports.useragent);
        var $ = cheerio.load(body);
        var t, a, eval_str_1 = $('html head').children()[1].children[0].data.split("\n")[8].substr(8, $('html head').children()[1].children[0].data.split("\n")[8].length);
        var eval_str_2 = $('html head').children()[1].children[0].data.split("\n")[15].substr(8, $('html head').children()[1].children[0].data.split("\n")[15].length);
        eval(eval_str_1);
        //console.log(eval_str_1);
        var l = (eval_str_1.split(" ")[eval_str_1.split(" ").length - 1]);
        eval(`var ${l.split("=")[0]}=${l.split("=")[1]}; console.log("Called!");`);
        eval(`console.log(${l.split("=")[0]});`);
        t = "kissanime.to";
        a = { value: null };
        //eval(eval_str_2);
        //eval($('html head').children()[1].children[0].data.split("\n")[15]);

    });
});
