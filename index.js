var request = require('request');

module.exports = {
  /**
   * Attempts connection to kissanime.to. See {@tutorial socket-connect}
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
    useragent = useragent !== null ? useragent : '';
  }
};
