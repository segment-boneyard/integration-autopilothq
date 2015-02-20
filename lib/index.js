
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `AutopilotHQ`
 *
 * http://developers.autopilothq.com/
 */

var AutopilotHQ = module.exports = integration('AutopilotHQ')
  .channels(['server', 'mobile', 'client'])
  .endpoint('https://api.autopilothq.com/segmentio')
  .ensure('settings.apiKey')
  .mapper(mapper)
  .retries(2);

/**
 * Identify.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.identify = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.track = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.page = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Screen.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.screen = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Group.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.group = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Alias.
 *
 * http://developers.autopilothq.com/
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

AutopilotHQ.prototype.alias = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
