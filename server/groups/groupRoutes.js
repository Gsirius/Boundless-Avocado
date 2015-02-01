var groupController = require('./groupController.js');


module.exports = function (app) {
  // app is injected from middlware.js

  app.param('group', groupController.findGroup);

  app.get('/', groupController.browse);
  app.post('/', groupController.create);

  app.get('/:group', groupController.members);
  app.post('/:group', groupController.join);

  app.get('/:group/pings/', groupController.history);
  app.post('/:group/pings/', groupController.ping);
};
