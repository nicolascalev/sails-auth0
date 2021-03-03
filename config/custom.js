/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // sendgridSecret: 'SG.fake.3e0Bn0qSQVnwb1E4qNPz9JZP5vLZYqjh7sn8S93oSHU',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …

  auth0: {
    authRequired: false,
    auth0Logout: true,
    idpLogout: true,
    issuerBaseURL: 'https://domain.com', // set domain
    clientID: 'clientid', // set client
    baseURL: 'http://localhost:1337', //set baseurl
    secret: 'octocat', // set secret
  },
};
