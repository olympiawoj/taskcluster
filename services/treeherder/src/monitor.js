const {defaultMonitorManager} = require('taskcluster-lib-monitor');

const monitorManager = defaultMonitorManager.configure({
  serviceName: 'treeherder',
});

module.exports = monitorManager;
