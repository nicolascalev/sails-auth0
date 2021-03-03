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
    ISSUER_BASE_URL: 'dev-nicolascalev.us.auth0.com',
    CLIENT_ID: 'i3vGB7TPfuJH76pzuSAZfPgWa4DhspEC',
    BASE_URL: 'http://localhost:1337',
    SECRET: 'p5h_tMnIFZF5bG9-KbFNml8kB3F99EqHtNOO4ur2byQhhSOrHsh6E3fMMNWAZaKl',
  },
};
