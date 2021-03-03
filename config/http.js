/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'bodyParser',
      'compress',
      'expressOpenidConnect',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],

    expressOpenidConnect: (function _configureAuth0 () {
      const { auth } = require('express-openid-connect');
      // var middlewareFn = auth(sails.config.custom.auth0);
      var middlewareFn = auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: 'https://dev-nicolascalev.us.auth0.com',
        clientID: 'i3vGB7TPfuJH76pzuSAZfPgWa4DhspEC',
        baseURL: 'http://localhost:1337',
        secret: 'p5h_tMnIFZF5bG9-KbFNml8kB3F99EqHtNOO4ur2byQhhSOrHsh6E3fMMNWAZaKl',
        idpLogout: true,
      });
      return middlewareFn;
    })(),


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({ strict: true });
      return middlewareFn;
    })(),

  },

};
