"use strict";
var request = require('request'),
    cheerio = require('cheerio');
const EventEmitter = require('events');
/** @module connection/cookie */

class KissanimeEvent extends EventEmitter {}

module.exports = {
    useragent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36",
    jar: request.jar(),
    kissanimeEvent: new KissanimeEvent(),
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
        this.kissanimeEvent.emit("connectChallenge", this.useragent);
    },

    /**
     * @description A test function, grabs the homepage.
     */
    test: () => {
        request({
            uri: "https://kissanime.to",
            method: "GET",
            followRedirect: true,
            maxRedirects: 10,
            headers: {
                'User-Agent': module.exports.useragent
            },
            jar: module.exports.jar
        }, function (error, response, body) {
            console.log(body);
        });
    }
};

/**
 * Connect to kissanime and grab auth data.
 * @desc Connects to Kissanime server
 */
module.exports.kissanimeEvent.on("connectChallenge", function(useragent) {
    console.log("Connection Challenge Started");
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
        var $ = cheerio.load(body);

        var jschl_answer, eval_str_1 = $('html head').children()[1].children[0].data.split("\n")[8].substr(8, $('html head').children()[1].children[0].data.split("\n")[8].length),
            eval_str_2 = $('html head').children()[1].children[0].data.split("\n")[15].substr(8, $('html head').children()[1].children[0].data.split("\n")[15].length);
        eval(`${eval_str_1} t = 'kissanime.to'; a = { value: null }; ${eval_str_2}; jschl_answer = a.value;`);
        console.log(jschl_answer);

        var jschl_vc = $('#challenge-form').children()[0].attribs.value,
            pass = $('#challenge-form').children()[1].attribs.value;
        console.log(`jschl_vc: ${jschl_vc}\npass: ${pass}`);

        // Emit event to continue to next step.
        setTimeout(() => {
            module.exports.kissanimeEvent.emit("connect", jschl_answer, jschl_vc, pass);
        }, 5000);
    });
});

module.exports.kissanimeEvent.on("connect", function(ans, vc, pass) {
    console.log("Connection request started.");
    request({
        uri: `https://kissanime.to/cdn-cgi/l/chk_jschl?jschl_answer=${ans}&jschl_vc=${vc}&pass=${pass}`,
        method: "GET",
        followRedirect: true,
        maxRedirects: 10,
        headers: {
            'User-Agent': module.exports.useragent
        },
        jar: module.exports.jar
    }, function (error, response, body) {
        if (error !== null) { console.log("Well fuck, that was the good part ;-;"); }
        else { module.exports.kissanimeEvent.emit("connected"); }
    });
});
