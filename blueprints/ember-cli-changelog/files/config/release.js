/* jshint node:true */
// var RSVP = require('rsvp');
var generateChangelog = require('ember-cli-changelog/lib/tasks/generate-changelog');

// For details on each option run `ember help release`
module.exports = {
  // local: true,
  // remote: 'some_remote',
  // annotation: "Release %@",
  // message: "Bumped version to %@",
  // manifest: [ 'package.json', 'bower.json', 'someconfig.json' ],
  // publish: true,
  // strategy: 'date',
  // format: 'YYYY-MM-DD',
  // timezone: 'America/Los_Angeles',

  defaultBranch: 'master',
  useLocalTags: true,
  // patternForPR: '',
  // patternForCommit: '',

  beforeCommit: function(project, versions) {
    console.log(project);
    return generateChangelog.call(project);
  }
};
