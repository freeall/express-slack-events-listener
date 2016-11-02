'use strict';

module.exports = function (verificationToken, onSlackEvent) {
  return function (req, res, next) {
    if (req.method !== 'POST') return next();
    if (!req.body) return res.status(400).send('bad request - no body found');

    var body = req.body.payload ? JSON.parse(req.body.payload) : req.body;

    if (verificationToken && body.token !== verificationToken) {
      return res.status(403).send('could not verify slack token');
    }

    if (body.type === 'url_verification') return res.send(body.challenge);
    if (body.type === 'event_callback') {
      onSlackEvent(body);
      return res.send('ok');
    }

    res.status(400).send('bad request - not slack event api');
  };
};
