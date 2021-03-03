/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * `AuthController.welcome()`
   */
  welcome: async function (req, res) {
    return res.json({ message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out' });
  },

  profile: async function (req, res) {
    return res.json(req.oidc.user);
  },

};

